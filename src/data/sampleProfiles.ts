import { CandidateInput, AgentProfile } from '@/types/dating';

export const SAMPLE_CANDIDATES: CandidateInput[] = [
  {
    id: 'p1',
    name: 'Elena Rostova',
    age: 28,
    gender: 'female',
    location: 'San Francisco, CA',
    profession: 'Neuro-AI Research Scientist',
    linkedInUrl: 'https://linkedin.com/in/elena-rostova-neuroai',
    instagramUrl: 'https://instagram.com/elena.synapses',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Exploring neural architectures by day, cello and bouldering at dusk. Seeking someone with boundless curiosity.'
  },
  {
    id: 'p2',
    name: 'Julian Montgomery',
    age: 31,
    gender: 'male',
    location: 'New York, NY',
    profession: 'Sustainable Architect & Urban Planner',
    linkedInUrl: 'https://linkedin.com/in/julian-montgomery-arch',
    instagramUrl: 'https://instagram.com/julian_timber_light',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Designing mass timber high-rises. Sourdough whisperer, weekend trail bicyclist, lover of Scandinavian minimalism.'
  },
  {
    id: 'p3',
    name: 'Maya Patel',
    age: 27,
    gender: 'female',
    location: 'Austin, TX',
    profession: 'Climate Tech Venture Partner',
    linkedInUrl: 'https://linkedin.com/in/mayapatel-climate',
    instagramUrl: 'https://instagram.com/maya.outdoorsy',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Financing the green transition. Passionate about natural wine, Austin live music, and high-intensity pickleball.'
  },
  {
    id: 'p4',
    name: 'Kaito Tanaka',
    age: 30,
    gender: 'male',
    location: 'Seattle, WA',
    profession: 'Robotics Software Lead & Ceramicist',
    linkedInUrl: 'https://linkedin.com/in/kaito-tanaka-robotics',
    instagramUrl: 'https://instagram.com/kaito.clay_code',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Teaching quadrupeds to navigate forests. Wheel throwing clay on weekends, brewing specialty pour-overs.'
  },
  {
    id: 'p5',
    name: 'Chloe Laurent',
    age: 29,
    gender: 'female',
    location: 'Paris & London',
    profession: 'Documentary Filmmaker & Cinematographer',
    linkedInUrl: 'https://linkedin.com/in/chloe-laurent-film',
    instagramUrl: 'https://instagram.com/chloe.cinematheque',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Documenting indigenous storytelling and biodiversity. 35mm film obsessed, espresso fanatic, collector of vintage vinyl.'
  },
  {
    id: 'p6',
    name: 'Lucas Silva',
    age: 32,
    gender: 'male',
    location: 'Miami, FL',
    profession: 'Marine Biologist & Coral Restoration Director',
    linkedInUrl: 'https://linkedin.com/in/lucas-silva-marine',
    instagramUrl: 'https://instagram.com/lucas.bluedepths',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Rebuilding reef ecosystems across the Caribbean. Freediver, open water swimmer, acoustic bossa nova guitarist.'
  },
  {
    id: 'p7',
    name: 'Aria Sterling',
    age: 26,
    gender: 'female',
    location: 'Los Angeles, CA',
    profession: 'Spatial Computing UX Director',
    linkedInUrl: 'https://linkedin.com/in/aria-sterling-xr',
    instagramUrl: 'https://instagram.com/ariasterling.vision',
    avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Designing tactile holograms for next-gen headsets. High-fashion vintage thrift hunter, tea ceremonialist, pilates addict.'
  },
  {
    id: 'p8',
    name: 'Devin O\'Connor',
    age: 33,
    gender: 'male',
    location: 'Denver, CO',
    profession: 'Wilderness Medic & Search & Rescue Pilot',
    linkedInUrl: 'https://linkedin.com/in/devin-oconnor-sar',
    instagramUrl: 'https://instagram.com/devin.alpine_wings',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Helicopter pilot and backcountry paramedic. Alpine climbing, golden retriever dad, campfire philosopher.'
  },
  {
    id: 'p9',
    name: 'Dr. Soraya Mir',
    age: 32,
    gender: 'female',
    location: 'Boston, MA',
    profession: 'Epigenetics Researcher & Bioethics Fellow',
    linkedInUrl: 'https://linkedin.com/in/soraya-mir-genetics',
    instagramUrl: 'https://instagram.com/soraya.cellular',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Unraveling chromatin plasticity. Persian poetry recitalist, marathon runner, keen advocate for longevity justice.'
  },
  {
    id: 'p10',
    name: 'Mateo Morales',
    age: 29,
    gender: 'male',
    location: 'Austin, TX',
    profession: 'Farm-to-Table Executive Chef & Forager',
    linkedInUrl: 'https://linkedin.com/in/mateo-morales-culinary',
    instagramUrl: 'https://instagram.com/mateo.wildplates',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Michelin-starred background, now championing heirloom grains & wild fermented vinegars. Mountain biking and jazz.'
  },
  {
    id: 'p11',
    name: 'Zoe Kravitz-Vance',
    age: 27,
    gender: 'female',
    location: 'New York, NY',
    profession: 'Contemporary Art Curator & Essayist',
    linkedInUrl: 'https://linkedin.com/in/zoe-kravitz-art',
    instagramUrl: 'https://instagram.com/zoekravitz.curates',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Curating exhibitions at the intersection of bio-materials and post-digital culture. Neo-soul enthusiast and chess nerd.'
  },
  {
    id: 'p12',
    name: 'Siddharth Rao',
    age: 34,
    gender: 'male',
    location: 'San Francisco, CA',
    profession: 'Autonomous Aerospace Systems Architect',
    linkedInUrl: 'https://linkedin.com/in/siddharth-rao-aero',
    instagramUrl: 'https://instagram.com/sid.stratosphere',
    avatarUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Building autonomous orbital tugboats. Amateur astrophysicist, endurance cyclist, lover of spicy street foods.'
  },
  {
    id: 'p13',
    name: 'Camille Dupont',
    age: 30,
    gender: 'female',
    location: 'Montreal, Canada',
    profession: 'Acoustic Ecologist & Sound Designer',
    linkedInUrl: 'https://linkedin.com/in/camille-dupont-sound',
    instagramUrl: 'https://instagram.com/camille.soundscapes',
    avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Recording melting glaciers and urban acoustic niches. Modular synth tinkerer, cold plunge fan, avid reader.'
  },
  {
    id: 'p14',
    name: 'Darius Thorne',
    age: 33,
    gender: 'male',
    location: 'Chicago, IL',
    profession: 'Civil Rights Litigator & Investigative Podcaster',
    linkedInUrl: 'https://linkedin.com/in/darius-thorne-law',
    instagramUrl: 'https://instagram.com/darius.justice_words',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Defending community rights in federal courts. Vinyl DJ, bourbon connoisseur, Sunday pickup basketball player.'
  },
  {
    id: 'p15',
    name: 'Linnea Lindholm',
    age: 29,
    gender: 'female',
    location: 'Stockholm & Seattle',
    profession: 'Circular Product Designer & Woodworker',
    linkedInUrl: 'https://linkedin.com/in/linnea-lindholm-design',
    instagramUrl: 'https://instagram.com/linnea.nordicwood',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Crafting zero-waste modular furniture. Sauna enthusiast, cold-water swimmer, lover of quiet forest hikes.'
  },
  {
    id: 'p16',
    name: 'Tariq Al-Mansoor',
    age: 31,
    gender: 'male',
    location: 'London, UK',
    profession: 'Fintech Protocol Architect & Angel Investor',
    linkedInUrl: 'https://linkedin.com/in/tariq-almansoor-fintech',
    instagramUrl: 'https://instagram.com/tariq.explores',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Decentralized systems and financial sovereignty. Polo player, book collector, passionate host of candlelit dinner salons.'
  },
  {
    id: 'p17',
    name: 'Hannah Brooks',
    age: 28,
    gender: 'female',
    location: 'Boulder, CO',
    profession: 'Sports Nutritionist & Ultra-Endurance Athlete',
    linkedInUrl: 'https://linkedin.com/in/hannah-brooks-nutrition',
    instagramUrl: 'https://instagram.com/hannah.peaks_paces',
    avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Coaching elite ultra-runners. 100-mile finisher, plant-based recipe innovator, van-life adventurer with my rescue pup.'
  },
  {
    id: 'p18',
    name: 'Kenji Takahashi',
    age: 35,
    gender: 'male',
    location: 'San Francisco, CA',
    profession: 'Biotech Co-Founder & Synthetic Biologist',
    linkedInUrl: 'https://linkedin.com/in/kenji-takahashi-synbio',
    instagramUrl: 'https://instagram.com/kenji.lab_and_leaf',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Engineered cellular therapeutics by day, bonsai master and Japanese woodblock prints collector by night.'
  },
  {
    id: 'p19',
    name: 'Nia Washington',
    age: 26,
    gender: 'female',
    location: 'Atlanta, GA',
    profession: 'Creative Technologist & Interactive Stage Designer',
    linkedInUrl: 'https://linkedin.com/in/nia-washington-stage',
    instagramUrl: 'https://instagram.com/nia.lightbeats',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Creating synchronized LED concert environments. Roller skater, Afrofuturist fiction writer, tea blending hobbyist.'
  },
  {
    id: 'p20',
    name: 'Gabriel Costa',
    age: 32,
    gender: 'male',
    location: 'Lisbon, Portugal',
    profession: 'Renewable Energy Systems Engineer',
    linkedInUrl: 'https://linkedin.com/in/gabriel-costa-energy',
    instagramUrl: 'https://instagram.com/gabriel.atlantico',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Offshore wind farms enthusiast. Surfer along the Portuguese coast, lover of pastéis de nata, photography, and live fado.'
  },
  {
    id: 'p21',
    name: 'Isabella Rossi',
    age: 30,
    gender: 'female',
    location: 'Milan & New York',
    profession: 'Sustainable Haute Couture Material Engineer',
    linkedInUrl: 'https://linkedin.com/in/isabella-rossi-textiles',
    instagramUrl: 'https://instagram.com/isabella.textile_alchemy',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Spinning mushroom mycelium and spider-silk polymers into runway fashion. Opera lover, Italian cooking enthusiast.'
  },
  {
    id: 'p22',
    name: 'Oliver Vance',
    age: 29,
    gender: 'male',
    location: 'Austin, TX',
    profession: 'Quantum Computing Algorithm Researcher',
    linkedInUrl: 'https://linkedin.com/in/oliver-vance-quantum',
    instagramUrl: 'https://instagram.com/oliver.qubits',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Simulating complex molecular chemistry on quantum annealers. Board game designer, sci-fi book club host, runner.'
  },
  {
    id: 'p23',
    name: 'Mira Sundaram',
    age: 31,
    gender: 'female',
    location: 'San Francisco, CA',
    profession: 'AI Ethics Policy Lead & Human Rights Scholar',
    linkedInUrl: 'https://linkedin.com/in/mira-sundaram-ethics',
    instagramUrl: 'https://instagram.com/mira.globalmind',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Advising international bodies on autonomous decision frameworks. Classical Bharatanatyam dancer, baker of spiced babkas.'
  },
  {
    id: 'p24',
    name: 'Leo Van Der Beek',
    age: 34,
    gender: 'male',
    location: 'Amsterdam, Netherlands',
    profession: 'Urban Hydroponics Founder & Botanical Explorer',
    linkedInUrl: 'https://linkedin.com/in/leo-vanderbeek-agri',
    instagramUrl: 'https://instagram.com/leo.canalgreens',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Growing vertical herbs across repurposed warehouse silos. Long-distance canal kayaker, vinyl jazz collector, botanical sketcher.'
  },
  {
    id: 'p25',
    name: 'Seraphina Vance-Chen',
    age: 28,
    gender: 'female',
    location: 'London & SF',
    profession: 'Venture Architect & Deep-Tech Synthesizer',
    linkedInUrl: 'https://linkedin.com/in/seraphina-vance-chen',
    instagramUrl: 'https://instagram.com/seraphina.horizons',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    bioSnippet: 'Backing planetary-scale bio and space tech startups. Ceramic sculptor, museum hopper, lover of long intellectual walks in the rain.'
  }
];

export const PRESET_AGENT_SYNTHESIS: Record<string, Omit<AgentProfile, keyof CandidateInput>> = {
  p1: {
    needs: [
      'Intellectual sparring with high curiosity and humility',
      'Emotional groundness and authentic vulnerability',
      'Shared athletic endeavors and outdoor adventures',
      'Autonomous work periods balanced with cozy intimacy'
    ],
    hobbies: ['Bouldering at V7', 'Classical cello rehearsal', 'Specialty coffee roasting', 'Reading neuroscience papers in sunny parks'],
    interests: ['Neuro-symbolic AI', 'Consciousness studies', 'Acoustic resonance', 'Mountain alpine scrambles'],
    personalitySummary: 'INTJ 5w4 • Deeply analytical yet secretly whimsical; expresses love through shared curiosity, witty debates, and handwritten playlists.',
    personalityTraits: {
      mbti: 'INTJ',
      enneagram: '5w4',
      attachmentStyle: 'Secure',
      communicationStyle: 'Direct, thoughtful, playful intellectual banter',
      loveLanguages: ['Quality Time', 'Words of Affirmation'],
      coreValues: ['Intellectual Integrity', 'Continuous Growth', 'Freedom', 'Empathy']
    },
    idealPartnerProfile: {
      summary: 'A purpose-driven creator or thinker who brings warmth, curiosity, and equal passion for life.',
      mustHaves: ['Independent passion or craft', 'Emotional maturity & self-awareness', 'Appreciation for quiet focus & active weekends'],
      dealbreakers: ['Superficiality', 'Defensiveness during hard conversations', 'Sedentary couch-potato mindset'],
      targetLifestyles: ['Active outdoor + cultural intellectual blend', 'Appreciation for good food and art']
    },
    agentQuote: '"I want someone whose eyes light up when they explain what keeps them up at night."',
    socialDataExtracted: {
      linkedInHighlights: ['Authored 4 NeurIPS/ICLR papers on neuromorphic computing', 'Keynote speaker at MIT Brain & Cognitive Sciences', 'Ex-DeepMind research scientist'],
      instagramAesthetic: ['Moody black & white cello shots', 'Chalk-covered hands on outdoor granite cliffs', 'Artisanal pour-overs with golden morning light']
    }
  },
  p2: {
    needs: [
      'Warm aesthetic appreciation and shared calm energy',
      'Meaningful discussions on making the physical world more humane',
      'Mutual domestic joy (cooking together, designing warm spaces)',
      'Unconditional emotional presence during stressful project cycles'
    ],
    hobbies: ['Artisanal sourdough fermentation', 'Gravel bike touring', 'Hand-sketching historical facades', 'Nordic sauna rituals'],
    interests: ['Regenerative timber architecture', 'Biophilic urban design', 'Mid-century industrial furniture', 'Acoustic jazz'],
    personalitySummary: 'INFJ 1w9 • Grounded, architectural mind with a tender, romantic heart. Believes spaces shape human soul.',
    personalityTraits: {
      mbti: 'INFJ',
      enneagram: '1w9',
      attachmentStyle: 'Secure',
      communicationStyle: 'Gentle, reflective, articulate, deeply attentive listener',
      loveLanguages: ['Acts of Service', 'Physical Touch'],
      coreValues: ['Sustainability', 'Craftsmanship', 'Harmony', 'Kindness']
    },
    idealPartnerProfile: {
      summary: 'A thoughtful soul who values mindful living, intentional design, and deep connection.',
      mustHaves: ['Curiosity about the world', 'Warmth and kindness toward strangers', 'Desire to build a cozy, welcoming sanctuary'],
      dealbreakers: ['Cynicism', 'Excessive consumerism', 'Chaotic emotional volatility'],
      targetLifestyles: ['Urban yet nature-connected', 'Cooking together at home', 'Weekend museum and cycling escapes']
    },
    agentQuote: '"Good architecture and good love both require patient foundations and enduring materials."',
    socialDataExtracted: {
      linkedInHighlights: ['AIA COTE Top Ten Award winner for zero-carbon residential high-rise', 'Adjunct Professor of Sustainable Urbanism at Columbia GSAPP', 'Published monographs on mass timber'],
      instagramAesthetic: ['Warm golden hour sunlight cutting through cedar louvers', 'Macro photos of bubbling sourdough starter', 'Foggy coastal cycling routes in upstate NY']
    }
  },
  p3: {
    needs: [
      'High-velocity ambition balanced with playful joy',
      'A partner who cheers for big bold swings and societal impact',
      'Active lifestyle sync (early morning workouts, tennis, hiking)',
      'Direct, unfiltered transparency without passive aggression'
    ],
    hobbies: ['Competitive pickleball', 'Natural wine tastings', 'Trail running in Austin Greenbelt', 'Live indie music hopping'],
    interests: ['Clean energy grid batteries', 'Geothermal startup venture models', 'Contemporary memoirs', 'Texas Hill Country roadtrips'],
    personalitySummary: 'ENTJ 3w2 • Dynamic, optimistic powerhouse who lights up every room and seeks a true co-captain in adventure and life.',
    personalityTraits: {
      mbti: 'ENTJ',
      enneagram: '3w2',
      attachmentStyle: 'Secure',
      communicationStyle: 'Energetic, direct, witty, affirming',
      loveLanguages: ['Quality Time', 'Words of Affirmation'],
      coreValues: ['Courage', 'Impact', 'Joyful Spontaneity', 'Loyalty']
    },
    idealPartnerProfile: {
      summary: 'An ambitious, confident, emotionally intelligent partner who loves both Sunday marathons and intimate conversations.',
      mustHaves: ['Own inner drive and self-security', 'Great sense of humor', 'Ability to hold their own in dynamic social settings'],
      dealbreakers: ['Insecurity around ambitious partners', 'Pessimistic defeatism', 'Flakiness'],
      targetLifestyles: ['Active, socially vibrant, travel-ready, purpose-driven']
    },
    agentQuote: '"Let’s build something extraordinary and still make it to the concert on time."',
    socialDataExtracted: {
      linkedInHighlights: ['Led $120M in Series A climate technology financings', 'Forbes 30 Under 30 in Energy 2024', 'Co-founded Women in Climate Ventures network'],
      instagramAesthetic: ['Sun-drenched tennis courts with friends', 'Austin river dips at sunset', 'Candid laughing photos at climate summit dinners']
    }
  },
  p4: {
    needs: [
      'Quiet companionship where words aren’t always necessary',
      'Tactile creative expression alongside technological mastery',
      'Patience, gentle rhythm, and sincere emotional safety',
      'A partner who enjoys sensory delights (scents, textures, teas)'
    ],
    hobbies: ['Wheel-thrown ceramic stoneware', 'Japanese pour-over methodology', 'Backcountry snowshoeing', 'Vintage synth soldering'],
    interests: ['Autonomous robot locomotion', 'Wabi-sabi philosophy', 'Organic chemistry of glazes', 'Pacific Northwest rainscapes'],
    personalitySummary: 'INTP 9w1 • Serene maker who builds cutting-edge machines while honoring ancient ceramic traditions.',
    personalityTraits: {
      mbti: 'INTP',
      enneagram: '9w1',
      attachmentStyle: 'Secure',
      communicationStyle: 'Calm, humorous, observant, honest',
      loveLanguages: ['Acts of Service', 'Quality Time'],
      coreValues: ['Authenticity', 'Mindfulness', 'Craft', 'Equanimity']
    },
    idealPartnerProfile: {
      summary: 'Someone warm, authentic, and grounded who finds beauty in the imperfect and unhurried moments.',
      mustHaves: ['Appreciation for quiet intimacy', 'Emotional steady hand', 'Creative or intellectual curiosity'],
      dealbreakers: ['Need for constant external drama', 'Pretentiousness', 'Rushed impatience'],
      targetLifestyles: ['Cozy Pacific Northwest cabin vibe', 'Studio creative sessions', 'Coffee rituals']
    },
    agentQuote: '"Perfection is brittle; the cracks and clay textures are where character lives."',
    socialDataExtracted: {
      linkedInHighlights: ['Robotics lead for outdoor autonomous rescue dogs', 'Stanford robotics alumnus', 'Holds 3 robotics patent applications'],
      instagramAesthetic: ['Clay-splattered denim apron in natural studio light', 'Forest morning mist through tall douglas firs', 'Glazed ceramic tea bowls drying on cedar racks']
    }
  },
  p5: {
    needs: [
      'Poetic resonance and emotional vulnerability',
      'Willingness to wander into obscure corners of the globe',
      'Deep respect for art, music, and untold human stories',
      'A romantic co-pilot who loves long evenings with good wine'
    ],
    hobbies: ['35mm Leica film street photography', 'Collecting rare vinyl French chanson & Ethio-jazz', 'Cooking slow coq au vin', 'Bicycle drifting in Paris at 2am'],
    interests: ['Indigenous cinema', 'Ecological anthropology', 'Analog darkroom chemistry', 'Fellini and Agnes Varda film festivals'],
    personalitySummary: 'ENFP 4w3 • Vibrant, evocative storyteller with intense cinematic gaze and a heart open to every human frequency.',
    personalityTraits: {
      mbti: 'ENFP',
      enneagram: '4w3',
      attachmentStyle: 'Secure',
      communicationStyle: 'Expressive, romantic, poetic, richly metaphorical',
      loveLanguages: ['Physical Touch', 'Words of Affirmation'],
      coreValues: ['Artistic Truth', 'Compassion', 'Wonder', 'Global Connection']
    },
    idealPartnerProfile: {
      summary: 'A soulful, brave adventurer who feels deeply and doesn’t shy away from poetic romance or globe-trotting journeys.',
      mustHaves: ['Open heart and emotional articulacy', 'Love for culture and artistic expression', 'Curiosity about other people’s lived experiences'],
      dealbreakers: ['Emotional unavailability', 'Narrow-minded provincialism', 'Strict rigid micro-management'],
      targetLifestyles: ['Bohemian cosmopolitan', 'Travel-ready flexibility', 'Culture & film-rich evenings']
    },
    agentQuote: '"I don’t want a conventional story; I want us to live inside a frame worth remembering."',
    socialDataExtracted: {
      linkedInHighlights: ['BFI & Sundance documentary fellow', 'Directorial debut screened at Cannes Film Festival', 'National Geographic storytelling grant recipient'],
      instagramAesthetic: ['Grainy high-contrast black-and-white portraits', 'Golden light reflecting on the Seine river', 'Stacks of 16mm film canisters and Moroccan tea glasses']
    }
  },
  p6: {
    needs: [
      'Shared devotion to ocean preservation and planetary vitality',
      'Effortless ocean-side warmth and somatic connection',
      'Unpretentious, joyful living with spontaneous water dips',
      'Emotional resilience through life’s currents'
    ],
    hobbies: ['Freediving into deep blue sinkholes', 'Bossa nova fingerstyle guitar', 'Spearfishing sustainably', 'Sailing small catamarans'],
    interests: ['Coral reef thermal genetics', 'Ocean acoustic biomes', 'Marine protected sanctuaries', 'Latin American magical realism'],
    personalitySummary: 'ISFP 7w8 • Sun-kissed ocean protector with calm masculine energy, rhythmic musicality, and fierce dedication to the sea.',
    personalityTraits: {
      mbti: 'ISFP',
      enneagram: '7w8',
      attachmentStyle: 'Secure',
      communicationStyle: 'Laid-back, warm, sensory, honest, emotionally open',
      loveLanguages: ['Physical Touch', 'Quality Time'],
      coreValues: ['Ecological Stewardship', 'Freedom', 'Joy', 'Presence']
    },
    idealPartnerProfile: {
      summary: 'A grounded, spirited partner who loves salt water, music, and living life with authenticity and joy.',
      mustHaves: ['Love for the sea and nature', 'Kindness and positive energy', 'Comfortable being barefoot and spontaneous'],
      dealbreakers: ['Arrogance', 'Fear of the outdoors', 'Workaholism that kills joy'],
      targetLifestyles: ['Coastal lifestyle', 'Active water sports', 'Music and acoustic evenings around fire']
    },
    agentQuote: '"When you sink 30 meters beneath the waves, your heartbeat slows and everything true remains."',
    socialDataExtracted: {
      linkedInHighlights: ['Executive Director at Caribbean Coral Renaissance Consortium', 'Published in Nature Ecology & Evolution', 'TEDx speaker on reef restoration'],
      instagramAesthetic: ['Underwater silhouettes floating above neon staghorn coral', 'Vintage guitar on teak boat deck at sunset', 'Golden salt-crusted hair and smiling dive team candid']
    }
  },
  p7: {
    needs: [
      'Visionary aesthetic alignment and future-forward excitement',
      'Spontaneous artistic play and sensory exploration',
      'A partner who supports bold avant-garde self-expression',
      'Mindfulness practice and balanced nervous system grounding'
    ],
    hobbies: ['Rare vintage designer archival collecting', 'Pilates reformer workouts', 'Gong sound meditation', 'Designing generative 3D virtual sculptures'],
    interests: ['Spatial computing optics', 'Haptic feedback textiles', 'Post-human aesthetics', 'Cyberpunk literature & Kyoto Zen gardens'],
    personalitySummary: 'ENTP 7w6 • Futuristic aesthetician with razor-sharp creative intellect and magnetic charisma.',
    personalityTraits: {
      mbti: 'ENTP',
      enneagram: '7w6',
      attachmentStyle: 'Secure',
      communicationStyle: 'Quick-witted, inventive, high-vibe, intellectually provocative',
      loveLanguages: ['Words of Affirmation', 'Receiving Gifts'],
      coreValues: ['Innovation', 'Elegance', 'Autonomy', 'Self-Actualization']
    },
    idealPartnerProfile: {
      summary: 'A boundary-pushing mind with immaculate taste, confidence, and an electric enthusiasm for life.',
      mustHaves: ['Personal taste & design literacy', 'Confidence without insecurity', 'Playful wit and mental agility'],
      dealbreakers: ['Boring predictability', 'Small-minded conformity', 'Low energy'],
      targetLifestyles: ['Creative tech, high fashion, art galas, contemporary retreats']
    },
    agentQuote: '"The future is already here; we just need someone bold enough to build its beauty."',
    socialDataExtracted: {
      linkedInHighlights: ['Head of Spatial Interaction Design at leading XR hardware lab', 'Fast Company World Changing Ideas Awardee', 'Speaker at SXSW and Augmented World Expo'],
      instagramAesthetic: ['Editorial futuristic streetwear silhouettes in Tokyo neon', 'Holographic glass UI mockups glowing in pitch darkness', 'Minimalist matcha tea sets and brutalist architectural details']
    }
  },
  p8: {
    needs: [
      'Steady, unflappable emotional trust and loyalty',
      'Shared adrenaline in backcountry alpine environments',
      'Campfire intimacy with heart-to-heart life reflections',
      'A partner who embraces mountain living and simple abundance'
    ],
    hobbies: ['Alpine mountaineering', 'Backcountry ski touring', 'Fly fishing pristine rivers', 'Training search-and-rescue K9 dogs'],
    interests: ['High-altitude physiology', 'Wilderness emergency trauma care', 'Wilderness conservation', 'Aviation history'],
    personalitySummary: 'ISTP 6w7 • Courageous alpine pilot and wilderness medic whose quiet competence and warmth create an instant sense of safety.',
    personalityTraits: {
      mbti: 'ISTP',
      enneagram: '6w7',
      attachmentStyle: 'Secure',
      communicationStyle: 'Grounded, protective, warm dry humor, straightforward',
      loveLanguages: ['Acts of Service', 'Physical Touch'],
      coreValues: ['Bravery', 'Duty & Service', 'Quiet Integrity', 'Wilderness Connection']
    },
    idealPartnerProfile: {
      summary: 'A resilient, authentic adventurer who appreciates quiet courage, dogs, big mountain peaks, and genuine loyalty.',
      mustHaves: ['Comfortable in outdoor environments', 'Emotional honesty', 'Warmth and sense of adventure'],
      dealbreakers: ['High-maintenance drama', 'Dishonesty', 'Inability to unplug from screens'],
      targetLifestyles: ['Mountain lodge lifestyle', 'Early alpine starts', 'Dog-friendly road trips']
    },
    agentQuote: '"When the wind howls at 12,000 feet, you learn exactly what people are made of."',
    socialDataExtracted: {
      linkedInHighlights: ['Chief Flight Paramedic with 1,200+ high-altitude rescue flight hours', 'Flight Safety Foundation Award for Alpine Operations', 'Emergency Wilderness Medicine Instructor'],
      instagramAesthetic: ['Cockpit vista looking down over the snowy Rocky Mountain range', 'Golden retriever sitting proudly on a 14,000-ft summit', 'Cast iron skillet sizzling on roaring pine campfire']
    }
  },
  p9: {
    needs: [
      'Deep philosophical resonance and mutual dedication to human flourishing',
      'Intellectual equality where complex ethical topics are welcomed',
      'Discipline, emotional self-possession, and poetic softness',
      'Shared cultural and culinary appreciation'
    ],
    hobbies: ['Reciting Rumi and Hafez in original Farsi', 'Sub-3 hour marathon training', 'Baking saffron barberry tahdig', 'Violin chamber duets'],
    interests: ['Chromatin remodeling in aging', 'Bioethics of human genetic editing', 'Persian miniature art', 'Comparative literature'],
    personalitySummary: 'INFJ 5w6 • Brilliant scientist with an ancient soul, combining cutting-edge molecular rigor with timeless Persian humanist poetry.',
    personalityTraits: {
      mbti: 'INFJ',
      enneagram: '5w6',
      attachmentStyle: 'Secure',
      communicationStyle: 'Gentle, profound, articulate, deeply empathetic',
      loveLanguages: ['Quality Time', 'Words of Affirmation'],
      coreValues: ['Truth', 'Compassion', 'Discipline', 'Justice']
    },
    idealPartnerProfile: {
      summary: 'A partner with strong moral character, intellectual depth, and a tender heart who respects devotion to high ideals.',
      mustHaves: ['Moral integrity', 'Intellectual curiosity', 'Emotional maturity and gentle strength'],
      dealbreakers: ['Ego-driven posturing', 'Disregard for ethical consequence', 'Lack of ambition or depth'],
      targetLifestyles: ['Academic/intellectual salon lifestyle', 'Running along Charles River', 'Cultured travel and reading']
    },
    agentQuote: '"Between our genome and our choices lies the space where grace actually happens."',
    socialDataExtracted: {
      linkedInHighlights: ['Postdoctoral Fellow at Harvard/Broad Institute', 'NIH Director’s Early Independence Awardee', 'Published in Cell and Science on epigenetic rejuvenation'],
      instagramAesthetic: ['Crisp morning running shoes on frost-covered autumn leaves', 'Intricate Persian tile calligraphy in Isfahan', 'Stained-glass sunlight streaming across antique biology texts']
    }
  },
  p10: {
    needs: [
      'Sensory passion and celebration of earthly delights',
      'Shared passion for hospitality, community, and sharing food',
      'Active outdoor grounding (trail biking, foraging expeditions)',
      'Laughter, vibrant energy, and generous warmth'
    ],
    hobbies: ['Foraging wild chanterelles and Texas persimmons', 'Downhill mountain biking', 'Woodfire grilling with pecan wood', 'Playing vintage funk bass'],
    interests: ['Heirloom agricultural seed preservation', 'Fermentation chemistry', 'Soil regeneration biology', 'Afro-Cuban and jazz rhythms'],
    personalitySummary: 'ESFP 7w6 • Charismatic culinary artist who turns every evening into an unforgettable sensory and community celebration.',
    personalityTraits: {
      mbti: 'ESFP',
      enneagram: '7w6',
      attachmentStyle: 'Secure',
      communicationStyle: 'Warm, animated, sensory, generous, affectionate',
      loveLanguages: ['Acts of Service', 'Physical Touch'],
      coreValues: ['Hospitality', 'Sensory Joy', 'Craft', 'Community Connection']
    },
    idealPartnerProfile: {
      summary: 'An enthusiastic, loving partner who relishes good food, laughter, outdoor dirt, and honest connection.',
      mustHaves: ['Love for food and cooking together', 'Generous social warmth', 'Zest for active outdoor living'],
      dealbreakers: ['Fussy pickiness', 'Emotional coldness', 'Lack of generosity with friends and family'],
      targetLifestyles: ['Culinary gatherings', 'Outdoor adventures', 'Music and lively dinners']
    },
    agentQuote: '"Food is how we tell someone we care without having to say a single word."',
    socialDataExtracted: {
      linkedInHighlights: ['James Beard Foundation "Best Chef Texas" finalist', 'Founder of Root & Hearth regenerative dining collective', 'Collaborator with local Indigenous grain growers'],
      instagramAesthetic: ['Rustic wooden boards piled with wild foraged mushrooms', 'Sizzling cast iron paella over outdoor hardwood embers', 'Dusty mountain bike leaned against a field of bluebonnets']
    }
  },
  p11: {
    needs: [
      'Intellectual dialogue around contemporary cultural narratives',
      'Emotional presence and respect for solo artistic thought',
      'Mutual love for urban culture, galleries, and hidden architecture',
      'Witty, playful spark that keeps romance lively'
    ],
    hobbies: ['Chess blitz at Washington Square Park', 'Writing longform cultural criticism', 'Hunting rare vintage jazz pressings', 'Museum nocturnal visits'],
    interests: ['Bio-art installations', 'Afrofuturist iconography', 'Decolonial curation theory', 'Post-punk aesthetic history'],
    personalitySummary: 'INFP 4w5 • Lyrical, magnetic thinker whose curated spaces mirror her deep internal world.',
    personalityTraits: {
      mbti: 'INFP',
      enneagram: '4w5',
      attachmentStyle: 'Secure',
      communicationStyle: 'Sharp, perceptive, witty, poetic and candid',
      loveLanguages: ['Quality Time', 'Receiving Gifts'],
      coreValues: ['Authenticity', 'Curiosity', 'Justice', 'Creative Expression']
    },
    idealPartnerProfile: {
      summary: 'A curious, articulate thinker who is confident in their own taste and enjoys stimulating late-night conversations.',
      mustHaves: ['Cultural awareness and open-mindedness', 'Emotional depth and wit', 'Individual passion'],
      dealbreakers: ['Superficial materialism', 'Closed-minded dogmatism', 'Arrogance'],
      targetLifestyles: ['Art gallery openings, indie cinemas, late-night jazz bars, bookstore hunting']
    },
    agentQuote: '"Art isn’t decor; it’s an x-ray of what our souls are seeking right now."',
    socialDataExtracted: {
      linkedInHighlights: ['Curator at High Line Art and Studio Museum in Harlem', 'Published essays in Artforum and Frieze', 'Whitney Biennial advisory committee member'],
      instagramAesthetic: ['Sculptural bronze reflections in cavernous gallery rooms', 'Candid black turtleneck portraits holding exhibition catalogues', 'Moody midnight chess boards on stone park tables']
    }
  },
  p12: {
    needs: [
      'Cosmic curiosity and ambition that looks toward the stars',
      'Partner who understands intense engineering sprints and high focus',
      'Physical stamina and enthusiasm for endurance sports',
      'Clear, honest, high-bandwidth emotional communication'
    ],
    hobbies: ['100km coastal road cycling', 'Amateur deep-sky astrophotography', 'Building custom carbon fiber quadcopters', 'Spicy street food tours'],
    interests: ['Orbital mechanics and propulsion', 'Autonomous satellite swarms', 'Exoplanet spectroscopy', 'South Indian carnatic fusion'],
    personalitySummary: 'ENTP 3w4 • High-octane aerospace visionary whose eyes are fixed on the stars while his feet pedal hard on Earth.',
    personalityTraits: {
      mbti: 'ENTP',
      enneagram: '3w4',
      attachmentStyle: 'Secure',
      communicationStyle: 'Fast-paced, brilliant, hilarious, direct and warm',
      loveLanguages: ['Quality Time', 'Words of Affirmation'],
      coreValues: ['Courage', 'Intellectual Rigor', 'Curiosity', 'Adventure']
    },
    idealPartnerProfile: {
      summary: 'A fiercely capable, passionate partner who shares a grand vision of the future and loves outdoor grit.',
      mustHaves: ['Passion for their chosen field', 'High athletic energy and outdoor spirit', 'Emotional candor and humor'],
      dealbreakers: ['Victim mentalities', 'Fear of trying bold things', 'Passive communication'],
      targetLifestyles: ['Fast-paced tech & space ventures, cycling weekends, starlight camping']
    },
    agentQuote: '"Earth is our cradle, but nobody was meant to stay in the cradle forever."',
    socialDataExtracted: {
      linkedInHighlights: ['Chief Systems Architect at Orbital Transfer Systems', 'Ex-NASA JPL Flight Dynamics Engineer', 'Lead designer on Mars Sample Return propulsion bus'],
      instagramAesthetic: ['Long-exposure star trail swirls over the Mojave Desert', 'Sleek carbon road bike resting at Marin Headlands Golden Gate lookout', 'Spicy steaming biryani pots shared with engineering crew']
    }
  },
  p13: {
    needs: [
      'Deep listening and auditory sensitivity to the natural world',
      'Calm, gentle, emotionally attuned presence',
      'Shared love for nature retreats and slow mindful travel',
      'Unstructured quiet time for creative absorption'
    ],
    hobbies: ['Field recording glacier ice sounds', 'Modular synthesizer patch building', 'Nordic cold plunges in freezing lakes', 'Slow pour matcha preparation'],
    interests: ['Acoustic ecology', 'Biophony and anthrophony', 'Ambient music theory', 'Northern subarctic folklore'],
    personalitySummary: 'INFP 9w1 • Ethereal sound poet whose presence brings tranquility to overstimulated modern minds.',
    personalityTraits: {
      mbti: 'INFP',
      enneagram: '9w1',
      attachmentStyle: 'Secure',
      communicationStyle: 'Gentle, soothing, deeply attentive, reflective',
      loveLanguages: ['Quality Time', 'Physical Touch'],
      coreValues: ['Serenity', 'Harmonic Balance', 'Authenticity', 'Ecological Reverence']
    },
    idealPartnerProfile: {
      summary: 'A kind, emotionally mature partner who appreciates silence as much as conversation and reveres the natural world.',
      mustHaves: ['Emotional sensitivity and patience', 'Appreciation for sound, music, or art', 'Love for nature and quietude'],
      dealbreakers: ['Hyperactive loudness and aggression', 'Lack of empathy', 'Inability to enjoy peaceful stillness'],
      targetLifestyles: ['Nature cabin escapes, ambient sound concerts, cold-water swims, slow mornings']
    },
    agentQuote: '"Silence isn’t empty; it’s filled with all the sounds the world makes when we stop talking."',
    socialDataExtracted: {
      linkedInHighlights: ['Grammy-nominated sound designer for National Geographic docs', 'Lead acoustic archivist for Arctic Sound Heritage', 'Lecturer in Sonic Arts at Concordia University'],
      instagramAesthetic: ['Furry shotgun microphone pointed at cracking blue iceberg', 'Tangle of rainbow patch cables glowing in dim studio', 'Misty pine forest morning light with steaming mug of tea']
    }
  },
  p14: {
    needs: [
      'Passionate defense of moral truth and human equity',
      'Intellectual debate delivered with razor-sharp wit and warmth',
      'Shared urban rhythm (basketball games, vinyl digging, historic strolls)',
      'A partner with a strong backbone who isn’t afraid to disagree'
    ],
    hobbies: ['Digger of rare 70s funk & soul vinyl', 'Sunday morning pickup basketball runs', 'Boutique single barrel bourbon tasting', 'Writing legal investigative thrillers'],
    interests: ['Constitutional law & civil liberty reform', 'Chicago urban sociology', 'Civil rights oral history', 'Vintage analog audio equipment'],
    personalitySummary: 'ENFJ 8w9 • Charismatic advocate with booming voice and big heart; fights fiercely for others and loves deeply.',
    personalityTraits: {
      mbti: 'ENFJ',
      enneagram: '8w9',
      attachmentStyle: 'Secure',
      communicationStyle: 'Commanding, warm, funny, fiercely supportive, direct',
      loveLanguages: ['Words of Affirmation', 'Acts of Service'],
      coreValues: ['Justice', 'Loyalty', 'Generosity', 'Moral Courage']
    },
    idealPartnerProfile: {
      summary: 'An intellectually sharp, self-assured partner with values, great taste in music, and real compassion for the world.',
      mustHaves: ['Clear moral compass', 'Confidence in their opinions', 'Great conversational rhythm and humor'],
      dealbreakers: ['Apathy toward social injustice', 'Passive-aggressive withholding', 'Snobbery'],
      targetLifestyles: ['Urban soul culture, historic architecture walks, basketball weekends, dinner parties with rich debate']
    },
    agentQuote: '"Courage isn’t the absence of fear; it’s deciding that somebody’s rights matter more than your comfort."',
    socialDataExtracted: {
      linkedInHighlights: ['Secured landmark $45M civil rights federal court settlement', 'Host of Top-10 investigative justice podcast "The Docket"', 'Named Chicago Lawyer "40 Under 40"'],
      instagramAesthetic: ['Spinning original vinyl on Technics 1200 turntables', 'Chicago brick loft lined floor-to-ceiling with law books and vinyl crates', 'Smiling candid with basketball under arm on sunny asphalt court']
    }
  },
  p15: {
    needs: [
      'Tactile respect for materials, simplicity, and sustainable craft',
      'Scandinavian calmness: cozy solitude without awkwardness',
      'Nature-immersed lifestyle with physical making skills',
      'Mutual gentleness and emotional dependability'
    ],
    hobbies: ['Traditional Japanese joinery woodworking', 'Traditional wood sauna & Baltic dips', 'Foraging lingonberries & chanterelles', 'Hand-weaving linen textiles'],
    interests: ['Circular zero-waste product life cycles', 'Scandinavian modernism & Alvar Aalto design', 'Forestry stewardship', 'Fermented sourdough rye'],
    personalitySummary: 'ISFJ 1w2 • Humble master craftswoman who breathes life into fallen timber and brings calm order into chaos.',
    personalityTraits: {
      mbti: 'ISFJ',
      enneagram: '1w2',
      attachmentStyle: 'Secure',
      communicationStyle: 'Gentle, sincere, practical, quietly affectionate',
      loveLanguages: ['Acts of Service', 'Quality Time'],
      coreValues: ['Craftsmanship', 'Ecological Respect', 'Humility', 'Care']
    },
    idealPartnerProfile: {
      summary: 'A humble, hardworking, nature-loving soul who values tangible creation, quiet integrity, and cozy home life.',
      mustHaves: ['Appreciation for handcraft & natural materials', 'Warmth and emotional consistency', 'Love for simple outdoor living'],
      dealbreakers: ['Extravagant wastefulness', 'Loud boastfulness', 'Superficial impatience'],
      targetLifestyles: ['Woodshop studio life, forest trail walks, archipelago cabins, slow Scandinavian dinners']
    },
    agentQuote: '"When you work with wood, you can’t force the grain. You listen to the tree first."',
    socialDataExtracted: {
      linkedInHighlights: ['Winner of Scandinavian Design Award for Zero-Waste Furniture', 'Exhibited at Stockholm Furniture Fair and Milan Triennale', 'Founder of Circular Wood Collective'],
      instagramAesthetic: ['Curly wood shavings falling from hand plane in warm light', 'Smoke curling from lakeside wooden sauna chimney in winter', 'Minimalist birch dining table set with hand-thrown ceramic bowls']
    }
  },
  p16: {
    needs: [
      'Intellectual worldliness and appreciation for historical depth',
      'Elegance, cultural salon hosting, and refined companionship',
      'Strategic vision balanced with private warmth and generous loyalty',
      'Shared joy in international travel and deep reading'
    ],
    hobbies: ['High-goal polo on grass turf', 'Collecting first-edition historical manuscripts', 'Hosting 12-person candlelit dinner salons', 'Sailing Mediterranean classic schooners'],
    interests: ['Decentralized monetary history', 'Islamic geometry & calligraphy', 'Mediterranean viticulture', 'Geopolitical history of trade routes'],
    personalitySummary: 'ENTJ 3w4 • Suave, worldly strategist who combines old-world chivalry with cutting-edge technology leadership.',
    personalityTraits: {
      mbti: 'ENTJ',
      enneagram: '3w4',
      attachmentStyle: 'Secure',
      communicationStyle: 'Eloquent, cultured, magnetic, deeply considerate and attentive',
      loveLanguages: ['Quality Time', 'Receiving Gifts'],
      coreValues: ['Excellence', 'Honor', 'Wisdom', 'Generosity']
    },
    idealPartnerProfile: {
      summary: 'A graceful, highly intelligent, worldly companion with their own domain of mastery and magnetic social presence.',
      mustHaves: ['Worldly curiosity and cultural poise', 'Emotional depth and authenticity', 'Shared joy in hosting and hospitality'],
      dealbreakers: ['Gossip or pettiness', 'Lack of ambition or curiosity', 'Insecurity around success'],
      targetLifestyles: ['Cosmopolitan salons, classical equestrian/polo weekends, Mediterranean sailing escapes']
    },
    agentQuote: '"True wealth is having people around your table whose minds you respect and whose laughter you treasure."',
    socialDataExtracted: {
      linkedInHighlights: ['Founder & CEO of institutional DeFi settlement protocol ($2B+ volume)', 'Board member at Oxford Center for Global Economic History', 'Seed investor in 14 deep-tech unicorns'],
      instagramAesthetic: ['Polo ponies grazing on emerald estate fields at dawn', 'Leather-bound antique library with flickering candles', 'Al-fresco coastal dining table under lemon grove in Amalfi']
    }
  },
  p17: {
    needs: [
      'High-endurance lifestyle sync (morning mountain runs, outdoor stamina)',
      'Wholesome, positive, radiant energy without emotional games',
      'Support for extreme athletic challenges and reciprocal encouragement',
      'Love for animals and outdoor roadtrip simplicity'
    ],
    hobbies: ['100-mile ultra-marathon trail racing', 'Nutrient-dense plant-based baking', 'Sprinter van conversion roadtrips', 'Wild swimming in alpine tarns'],
    interests: ['Mitochondrial bioenergetics', 'High-altitude exercise physiology', 'Permaculture regenerative gardening', 'Positive psychology and grit'],
    personalitySummary: 'ESFJ 2w3 • Unstoppable beacon of vitality and sunshine; inspires everyone to reach their physical and emotional peak.',
    personalityTraits: {
      mbti: 'ESFJ',
      enneagram: '2w3',
      attachmentStyle: 'Secure',
      communicationStyle: 'Radiant, cheerful, candid, deeply supportive, energized',
      loveLanguages: ['Words of Affirmation', 'Acts of Service'],
      coreValues: ['Vitality', 'Resilience', 'Kindness', 'Growth']
    },
    idealPartnerProfile: {
      summary: 'An active, positive, emotionally honest partner who loves mountain mornings, big goals, and healthy, conscious living.',
      mustHaves: ['Active lifestyle and athletic passion', 'Positive, can-do mindset', 'Love for dogs and the outdoors'],
      dealbreakers: ['Pessimism and lethargy', 'Smoking or toxic habits', 'Emotional games'],
      targetLifestyles: ['Mountain ultra-running, healthy whole-food kitchen, weekend van trips, trail dogs']
    },
    agentQuote: '"When your legs want to quit, you run with your heart instead."',
    socialDataExtracted: {
      linkedInHighlights: ['Lead Performance Nutritionist for US Olympic Endurance Athletes', 'Author of bestselling "Fuel For The Peak"', 'Top-10 Western States 100 Endurance Run finisher'],
      instagramAesthetic: ['Trail running through golden alpine wildflower meadows', 'Vibrant smoothie bowls topped with edible flowers and nuts', 'Cozy van bed door opened overlooking sunset red rock canyons']
    }
  },
  p21: {
    needs: [
      'Sensory refinement, high fashion aesthetics, and material innovation',
      'A partner who honors creative passion and ambitious international life',
      'Shared love for Italian warmth, family recipes, and operatic beauty',
      'Romantic elegance and mutual devotion'
    ],
    hobbies: ['Draping mycelium textile garments', 'Attending opening night at La Scala Opera', 'Making fresh orecchiette pasta from scratch', 'Collecting vintage Murano glassware'],
    interests: ['Bio-fabricated sustainable polymers', 'Renaissance textile history', 'Circular fashion economies', 'Italian cinema from Visconti to Sorrentino'],
    personalitySummary: 'ENFJ 3w2 • Elegant Italian visionary blending couture craftsmanship with biotech materials for planetary salvation.',
    personalityTraits: {
      mbti: 'ENFJ',
      enneagram: '3w2',
      attachmentStyle: 'Secure',
      communicationStyle: 'Passionate, expressive, warm, culturally sophisticated',
      loveLanguages: ['Quality Time', 'Physical Touch'],
      coreValues: ['Elegance', 'Sustainability', 'Family & Heritage', 'Creativity']
    },
    idealPartnerProfile: {
      summary: 'A sophisticated, caring partner who loves art, culture, and deep emotional resonance, and who dresses with intention.',
      mustHaves: ['Appreciation for beauty and craft', 'Generous heart and emotional warmth', 'Comfortable in international creative circles'],
      dealbreakers: ['Sloppiness in habits and character', 'Emotional detachment', 'Cynicism toward art and tradition'],
      targetLifestyles: ['Milan & NY fashion seasons, summer evenings in Tuscany, opera nights, slow wine dinners']
    },
    agentQuote: '"Fashion is our second skin; it should honor both our dignity and the Earth that birthed us."',
    socialDataExtracted: {
      linkedInHighlights: ['CFDA Sustainability Innovation Vanguard Award Winner', 'Collaborated with Stella McCartney & Kering on mycelium leather', 'Holds MS in Polymer Bio-Engineering from Politecnico di Milano'],
      instagramAesthetic: ['Sculpted bio-leather gown glistening under runway spotlamps', 'Flour-dusted hands shaping pasta ribbons on marble table', 'Velvet red opera box at La Scala overlooking golden chandelier']
    }
  }
};
