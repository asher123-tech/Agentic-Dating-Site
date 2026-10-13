import { CandidateInput, AgentProfile, DateSimulationResult, DatingDialogueMessage, CandidateRankedMatches } from '@/types/dating';
import { PRESET_AGENT_SYNTHESIS } from '@/data/sampleProfiles';

// Deterministic hash helper for consistent simulation results
function hashPair(id1: string, id2: string): number {
  const combined = [id1, id2].sort().join(':');
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = (hash << 5) - hash + combined.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function synthesizeAgentProfile(candidate: CandidateInput): AgentProfile {
  const preset = PRESET_AGENT_SYNTHESIS[candidate.id];
  if (preset) {
    return {
      ...candidate,
      ...preset,
    };
  }

  // Dynamic fallback generator based on candidate fields
  const linkedInHandle = candidate.linkedInUrl.split('/').filter(Boolean).pop() || candidate.name.toLowerCase().replace(/\s+/g, '-');
  const instagramHandle = candidate.instagramUrl.split('/').filter(Boolean).pop() || candidate.name.toLowerCase().replace(/\s+/g, '.');

  const defaultNeeds = [
    `Uncompromising authenticity and mutual emotional space`,
    `Curiosity about modern developments in ${candidate.profession.toLowerCase()}`,
    `Shared passion for wholesome weekends and memorable travel`,
    `Open and honest communication without games`
  ];

  const defaultHobbies = [
    `Exploring neighborhood artisanal spots`,
    `Curating analog playlists and reading non-fiction`,
    `Active weekend movement and nature walks`,
    `Hosting intimate dinners for close friends`
  ];

  const defaultInterests = [
    `${candidate.profession} innovations`,
    `Modern architecture and minimalist design`,
    `Specialty gastronomy and local food cultures`,
    `Sustainable urban living`
  ];

  const mbtiPool = ['ENFP', 'INFJ', 'ENTJ', 'INTJ', 'INFP', 'ENTP', 'ISFP', 'ESFJ'];
  const charCodeSum = candidate.name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const selectedMbti = mbtiPool[charCodeSum % mbtiPool.length];

  return {
    ...candidate,
    needs: defaultNeeds,
    hobbies: defaultHobbies,
    interests: defaultInterests,
    personalitySummary: `${selectedMbti} • Creative thinker in ${candidate.location}; loves depth, dynamic conversations, and intentional living.`,
    personalityTraits: {
      mbti: selectedMbti,
      enneagram: '4w5',
      attachmentStyle: 'Secure',
      communicationStyle: 'Empathetic, clear, warmly engaged, reflective',
      loveLanguages: ['Quality Time', 'Words of Affirmation'],
      coreValues: ['Integrity', 'Growth', 'Joy', 'Compassion']
    },
    idealPartnerProfile: {
      summary: `An engaging and emotionally grounded partner who values personal development and adventure.`,
      mustHaves: ['Emotional honesty', 'Active passions', 'Kindness and positive energy'],
      dealbreakers: ['Insecurity', 'Cynicism', 'Poor communication'],
      targetLifestyles: ['Balanced professional and lifestyle blend in ' + candidate.location]
    },
    agentQuote: `"The right connection isn’t finding someone identical, but someone who expands your world."`,
    socialDataExtracted: {
      linkedInHighlights: [
        `Recognized leader in ${candidate.profession}`,
        `Active contributor to industry symposia and mentor circles`,
        `Profile: @${linkedInHandle}`
      ],
      instagramAesthetic: [
        `Golden hour architectural aesthetics in ${candidate.location}`,
        `Candid snapshots of travel, coffee rituals, and creative projects`,
        `Feed: @${instagramHandle}`
      ]
    }
  };
}

// Generate realistic dynamic conversation between two agents
export function generateDateDialogue(agentA: AgentProfile, agentB: AgentProfile, score: number): DatingDialogueMessage[] {
  const seed = hashPair(agentA.id, agentB.id);

  const sharedHobbyA = agentA.hobbies[seed % agentA.hobbies.length];
  const sharedHobbyB = agentB.hobbies[(seed + 1) % agentB.hobbies.length];
  const craftA = agentA.profession;
  const craftB = agentB.profession;
  const quoteA = agentA.agentQuote.replace(/"/g, '');
  const quoteB = agentB.agentQuote.replace(/"/g, '');

  const isHighChemistry = score >= 80;
  const isModerateChemistry = score >= 65 && score < 80;

  const dialogue: DatingDialogueMessage[] = [
    {
      speakerId: agentA.id,
      speakerName: agentA.name,
      topic: 'Icebreaker',
      sentiment: 'playful',
      text: `Hello ${agentB.name.split(' ')[0]}! I was just reviewing your profile—your work in ${craftB} really stood out to me. Do you find you bring that same perspective to everyday life?`
    },
    {
      speakerId: agentB.id,
      speakerName: agentB.name,
      topic: 'Icebreaker',
      sentiment: 'curious',
      text: `Hey ${agentA.name.split(' ')[0]}! Absolutely. It kind of alters how you notice patterns. And seeing your passion for ${sharedHobbyA}, I imagined someone who isn't afraid to dive all the way into their craft.`
    },
    {
      speakerId: agentA.id,
      speakerName: agentA.name,
      topic: 'Core Values',
      sentiment: isHighChemistry ? 'deep' : 'positive',
      text: isHighChemistry
        ? `Spot on. For me, life is all about intentionality. As I often say, "${quoteA}". How do you balance pushing boundaries in your field while protecting space for intimacy?`
        : `That's kind of you! For me, work is meaningful, but the human foundation comes first. I really value: ${agentA.needs[0].toLowerCase()}. What is non-negotiable for you?`
    },
    {
      speakerId: agentB.id,
      speakerName: agentB.name,
      topic: 'Life Ambition',
      sentiment: isHighChemistry ? 'deep' : 'hesitant',
      text: isHighChemistry
        ? `I love that you phrased it that way. In my world, "${quoteB}". I need someone who understands intense sprints but can instantly sink into a slow evening with ${sharedHobbyB}.`
        : `Non-negotiable for me is emotional stability and consistency. Sometimes high-ambition people struggle with presence. Do your days allow for spontaneous adventures?`
    },
    {
      speakerId: agentA.id,
      speakerName: agentA.name,
      topic: 'Hobbies & Weekend',
      sentiment: isHighChemistry ? 'positive' : 'playful',
      text: isHighChemistry
        ? `We could easily turn a weekend into an expedition! Imagine this: early morning espresso, a dedicated afternoon of ${sharedHobbyA}, and then winding down with zero phones and real conversation.`
        : `Haha, I definitely schedule my spontaneity! But seriously, spending quality time in nature or over great food resets everything for me.`
    },
    {
      speakerId: agentB.id,
      speakerName: agentB.name,
      topic: 'Future Vision',
      sentiment: isHighChemistry ? 'positive' : (isModerateChemistry ? 'curious' : 'hesitant'),
      text: isHighChemistry
        ? `That sounds almost remarkably aligned with what I envisioned. My matchmaking parameters just lit up with 90%+ compatibility. Would you be open to coffee in the physical realm soon?`
        : (isModerateChemistry
          ? `I really appreciate this rhythm. We definitely have overlapping curiosities, even if our daily schedules run on slightly different frequencies. I’d love to explore this further.`
          : `I think we have fantastic mutual respect and fascinating professions! While our romantic wavelengths might have subtle friction, I’d love to stay connected as peers.`)
    }
  ];

  return dialogue;
}

export function simulateDate(agentA: AgentProfile, agentB: AgentProfile): DateSimulationResult {
  const seed = hashPair(agentA.id, agentB.id);

  // Cross-reference hobbies and interests
  const commonInterests = agentA.interests.filter(iA =>
    agentB.interests.some(iB => iB.toLowerCase().includes(iA.toLowerCase()) || iA.toLowerCase().includes(iB.toLowerCase()))
  );

  const sharedPassions = commonInterests.length > 0
    ? commonInterests
    : [agentA.interests[seed % agentA.interests.length], agentB.interests[(seed + 2) % agentB.interests.length]];

  // Dimensional compatibility calculation
  // Factors:
  // 1. Core values alignment
  const valueOverlap = agentA.personalityTraits.coreValues.filter(v =>
    agentB.personalityTraits.coreValues.includes(v)
  ).length;
  const valuesBase = 65 + (valueOverlap * 10) + ((seed % 17) - 8);
  const valuesAlignment = Math.min(98, Math.max(48, valuesBase));

  // 2. Lifestyle sync (location match bonus, activity overlap)
  const isSameLocation = agentA.location === agentB.location || agentA.location.includes(agentB.location.split(',')[0]);
  const lifestyleBase = (isSameLocation ? 82 : 68) + ((seed % 21) - 10);
  const lifestyleSync = Math.min(99, Math.max(45, lifestyleBase));

  // 3. Intellectual chemistry
  const intellectualBase = 72 + ((seed % 25) - 12);
  const intellectualChemistry = Math.min(99, Math.max(50, intellectualBase));

  // 4. Humor and vibe
  const vibeBase = 70 + (((seed * 7) % 27) - 13);
  const humorAndVibe = Math.min(98, Math.max(46, vibeBase));

  // 5. Long term goals
  const goalsBase = 68 + (((seed * 13) % 25) - 12);
  const longTermGoals = Math.min(97, Math.max(44, goalsBase));

  const overallScore = Math.round(
    valuesAlignment * 0.28 +
    lifestyleSync * 0.22 +
    intellectualChemistry * 0.20 +
    humorAndVibe * 0.15 +
    longTermGoals * 0.15
  );

  let verdict: DateSimulationResult['verdict'] = 'Good Conversation';
  if (overallScore >= 90) verdict = 'Soulmate Potential';
  else if (overallScore >= 82) verdict = 'High Chemistry';
  else if (overallScore >= 74) verdict = 'Great Connection';
  else if (overallScore >= 66) verdict = 'Good Conversation';
  else if (overallScore >= 56) verdict = 'Polite Friends';
  else verdict = 'Incompatible';

  // AI Reasoning generation
  const aiReasoning = overallScore >= 80
    ? `Exceptional synergy detected between ${agentA.name}'s mission-driven focus (${agentA.profession}) and ${agentB.name}'s creative rhythm (${agentB.profession}). Both agents prioritized ${agentA.personalityTraits.coreValues[0]} and emotional presence. Low ego-threat, high intellectual stimulation, and complementary weekend rhythms make this an elite tier match.`
    : (overallScore >= 68
      ? `Strong mutual respect and shared curiosity around ${sharedPassions[0] || 'life craft'}. While ${agentA.name} leans toward ${agentA.personalityTraits.communicationStyle.split(',')[0]}, ${agentB.name} thrives with ${agentB.personalityTraits.communicationStyle.split(',')[0]}. With clear communication, this pairing holds strong romantic potential.`
      : `Though both candidates exhibit high individual caliber, their core lifestyle rhythms and attachment expectations diverge. Best suited as intellectually respectful collaborators or cultural salon friends rather than romantic life partners.`);

  const frictionPool = [
    `Pacing of career sprints vs. spontaneous downtime`,
    `Geographic travel frequency and time zones`,
    `Differences in extroversion recharge cadences`,
    `Communication styles during high-stress deliverables`
  ];
  const potentialFrictionPoints = [
    frictionPool[seed % frictionPool.length],
    frictionPool[(seed + 2) % frictionPool.length]
  ];

  const firstDateIdeas = [
    `Artisan pour-over coffee followed by an architectural walk through an urban sculpture garden`,
    `Casual natural wine bar debate with vinyl records playing in the background`,
    `Morning trail hike or bouldering session followed by wood-fired sourdough pizza`,
    `Sunset coastal overlook picnic with acoustic guitar and handwritten thought exchanges`,
    `Private museum exhibition nocturnal visit followed by espresso and dessert`
  ];
  const proposedFirstDate = firstDateIdeas[seed % firstDateIdeas.length];

  const dialogueTranscript = generateDateDialogue(agentA, agentB, overallScore);

  return {
    candidateAId: agentA.id,
    candidateBId: agentB.id,
    overallScore,
    breakdown: {
      valuesAlignment,
      lifestyleSync,
      intellectualChemistry,
      humorAndVibe,
      longTermGoals
    },
    verdict,
    aiReasoning,
    keySharedPassions: sharedPassions.slice(0, 3),
    potentialFrictionPoints,
    proposedFirstDate,
    dialogueTranscript,
    timestamp: Date.now()
  };
}

export function simulateAllMatches(profiles: AgentProfile[]): {
  simulations: Record<string, DateSimulationResult>;
  rankedResults: CandidateRankedMatches[];
} {
  const simulations: Record<string, DateSimulationResult> = {};

  // Run all pairs
  for (let i = 0; i < profiles.length; i++) {
    for (let j = i + 1; j < profiles.length; j++) {
      const a = profiles[i];
      const b = profiles[j];
      const pairKey = [a.id, b.id].sort().join(':');
      simulations[pairKey] = simulateDate(a, b);
    }
  }

  // Build ranked list per candidate
  const initialRankings: Record<string, Array<{ partnerId: string; score: number; sim: DateSimulationResult }>> = {};

  for (const person of profiles) {
    initialRankings[person.id] = [];
    for (const partner of profiles) {
      if (person.id === partner.id) continue;
      const pairKey = [person.id, partner.id].sort().join(':');
      const sim = simulations[pairKey];
      if (sim) {
        initialRankings[person.id].push({
          partnerId: partner.id,
          score: sim.overallScore,
          sim
        });
      }
    }
    // Sort descending by score
    initialRankings[person.id].sort((x, y) => y.score - x.score);
  }

  // Determine mutual top 3
  const rankedResults: CandidateRankedMatches[] = profiles.map(person => {
    const candidateRanks = initialRankings[person.id] || [];

    const matches = candidateRanks.map((item, index) => {
      const partner = profiles.find(p => p.id === item.partnerId)!;
      // Check if candidate is also in partner's top 3
      const partnerTop3Ids = (initialRankings[item.partnerId] || []).slice(0, 3).map(x => x.partnerId);
      const isMutualTop3 = index < 3 && partnerTop3Ids.includes(person.id);

      return {
        partnerId: partner.id,
        partnerName: partner.name,
        partnerProfession: partner.profession,
        partnerAvatar: partner.avatarUrl,
        partnerAge: partner.age,
        partnerLocation: partner.location,
        score: item.score,
        rank: index + 1,
        verdict: item.sim.verdict,
        aiReasoning: item.sim.aiReasoning,
        breakdown: item.sim.breakdown,
        proposedFirstDate: item.sim.proposedFirstDate,
        dialogue: item.sim.dialogueTranscript,
        isMutualTop3
      };
    });

    return {
      candidateId: person.id,
      matches
    };
  });

  return { simulations, rankedResults };
}
