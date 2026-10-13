export interface CandidateInput {
  id: string;
  name: string;
  age: number;
  gender: 'female' | 'male' | 'non-binary';
  location: string;
  profession: string;
  linkedInUrl: string;
  instagramUrl: string;
  avatarUrl: string;
  bioSnippet: string;
}

export interface AgentPersonality {
  mbti: string;
  enneagram: string;
  attachmentStyle: 'Secure' | 'Anxious-Preoccupied' | 'Dismissive-Avoidant' | 'Fearful-Avoidant';
  communicationStyle: string;
  loveLanguages: string[];
  coreValues: string[];
}

export interface AgentProfile extends CandidateInput {
  needs: string[];
  hobbies: string[];
  interests: string[];
  personalitySummary: string;
  personalityTraits: AgentPersonality;
  idealPartnerProfile: {
    summary: string;
    mustHaves: string[];
    dealbreakers: string[];
    targetLifestyles: string[];
  };
  agentQuote: string;
  socialDataExtracted: {
    linkedInHighlights: string[];
    instagramAesthetic: string[];
  };
}

export interface DatingDialogueMessage {
  speakerId: string;
  speakerName: string;
  text: string;
  topic: 'Icebreaker' | 'Core Values' | 'Life Ambition' | 'Hobbies & Weekend' | 'Quirks & Vulnerability' | 'Future Vision';
  sentiment: 'positive' | 'curious' | 'playful' | 'deep' | 'hesitant';
}

export interface DateSimulationResult {
  candidateAId: string;
  candidateBId: string;
  overallScore: number; // 0 - 100
  breakdown: {
    valuesAlignment: number; // 0 - 100
    lifestyleSync: number; // 0 - 100
    intellectualChemistry: number; // 0 - 100
    humorAndVibe: number; // 0 - 100
    longTermGoals: number; // 0 - 100
  };
  verdict: 'Soulmate Potential' | 'High Chemistry' | 'Great Connection' | 'Good Conversation' | 'Polite Friends' | 'Incompatible';
  aiReasoning: string;
  keySharedPassions: string[];
  potentialFrictionPoints: string[];
  proposedFirstDate: string;
  dialogueTranscript: DatingDialogueMessage[];
  timestamp?: number;
}

export interface CandidateRankedMatches {
  candidateId: string;
  matches: {
    partnerId: string;
    partnerName: string;
    partnerProfession: string;
    partnerAvatar: string;
    partnerAge: number;
    partnerLocation: string;
    score: number;
    rank: number;
    verdict: string;
    aiReasoning: string;
    breakdown: DateSimulationResult['breakdown'];
    proposedFirstDate: string;
    dialogue: DatingDialogueMessage[];
    isMutualTop3: boolean;
  }[];
}
