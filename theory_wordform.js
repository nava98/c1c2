const THEORY_WORDFORM = {
wordform: {
  title: 'Word Formation',
  intro: 'Word formation at C1/C2 requires precision with prefixes, suffixes, and derivational patterns. These are tested directly in Use of English papers (CAE, CPE) and indicate mastery of the lexical system.',
  entries: [
    { term:'Prefix: un- (negation)', pos:'prefix', meaning:'Creates negative adjectives and past participles.', examples:['<em>unprecedented, undeterred, unsubstantiated, unequivocal, unfounded, untenable, unwarranted</em>'] },
    { term:'Prefix: in- / im- / ir- / il-', pos:'prefix', meaning:'"In-" before most consonants; "im-" before m/p; "ir-" before r; "il-" before l.', examples:['<em>inexplicable, inherent, incompatible, implicit</em>','<em>impractical, implausible, impunity</em>','<em>irrefutable, irreversible, irreconcilable, irresponsible</em>','<em>illicit, illegitimate, illogical</em>'] },
    { term:'Prefix: dis-', pos:'prefix', meaning:'Reversal or negation.', examples:['<em>disregard, discredit, dismantle, disproportionate, dissent, discrepancy</em>'] },
    { term:'Prefix: mis-', pos:'prefix', meaning:'Wrongly or badly.', examples:['<em>misrepresent, misconstrue, misappropriate, mitigate (N/A)</em>','correct: <em>misinterpret, mislead, mismanage, misguide</em>'] },
    { term:'Prefix: counter-', pos:'prefix', meaning:'Against; in opposition to.', examples:['<em>counterproductive, counterintuitive, counterargument, countermeasure, counterpart</em>'] },
    { term:'Prefix: over- / under-', pos:'prefix pair', meaning:'"Over-" = excessively. "Under-" = insufficiently.', examples:['<em>overstate / understate, overestimate / underestimate</em>','<em>overrepresented / underrepresented, oversimplify, underfunded</em>'] },
    { term:'Prefix: out-', pos:'prefix', meaning:'To do something better than or beyond.', examples:['<em>outperform, outnumber, outlast, outweigh, outstrip</em>'] },
    { term:'Suffix: -tion / -sion / -ation', pos:'suffix', meaning:'Forms abstract nouns from verbs.', examples:['constrain → <em>constraint</em>','displace → <em>displacement</em>','implement → <em>implementation</em>','substantiate → <em>substantiation</em>','deteriorate → <em>deterioration</em>','rationalise → <em>rationalisation</em>'] },
    { term:'Suffix: -ity / -ty', pos:'suffix', meaning:'Forms abstract nouns, often from adjectives.', examples:['feasible → <em>feasibility</em>','viable → <em>viability</em>','accountable → <em>accountability</em>','ambiguous → <em>ambiguity</em>','inevitable → <em>inevitability</em>','plausible → <em>plausibility</em>'] },
    { term:'Suffix: -ness', pos:'suffix', meaning:'Forms nouns from adjectives. Very productive.', examples:['thorough → <em>thoroughness</em>','tactless → <em>tactlessness</em>','willing → <em>willingness</em>','apt → <em>aptness</em>','stark → <em>starkness</em>'] },
    { term:'Suffix: -itude', pos:'suffix', meaning:'Forms abstract nouns (often C2 level).', examples:['inept → <em>ineptitude</em>','apt → <em>aptitude</em>','turp → <em>turpitude</em>','solicit → <em>solicitude</em>'] },
    { term:'Suffix: -al', pos:'suffix', meaning:'Forms nouns from verbs.', examples:['rebut → <em>rebuttal</em>','withdraw → <em>withdrawal</em>','propose → <em>proposal</em>','arrive → <em>arrival</em>','betray → <em>betrayal</em>','deny → <em>denial</em>'] },
    { term:'Suffix: -ism / -ist', pos:'suffix pair', meaning:'-ism = ideology; -ist = person.', examples:['sceptic → <em>scepticism</em>','pragmatic → <em>pragmatism / pragmatist</em>','cynic → <em>cynicism</em>','opportunist → <em>opportunism</em>'] },
    { term:'Suffix: -ent / -ence, -ant / -ance', pos:'suffix group', meaning:'Adjectives ending -ent/-ant; nouns ending -ence/-ance.', examples:['persist → <em>persistent / persistence</em>','comply → <em>compliant / compliance</em>','depend → <em>dependent / dependence</em>','signify → <em>significant / significance</em>'], note:'A common spelling pitfall at C2. Learn both forms together.' },
    { term:'Suffix: -fy / -ify', pos:'suffix', meaning:'Forms verbs meaning "to make" or "to cause to be".', examples:['simple → <em>simplify</em>','intense → <em>intensify</em>','just → <em>justify</em>','solid → <em>solidify</em>','class → <em>classify</em>'] },
    { term:'Suffix: -ment, -age, -ship, -dom', pos:'suffix group', meaning:'Common patterns for abstract nouns.', examples:['-ment: achieve → <em>achievement</em>, assess → <em>assessment</em>','-age: short → <em>shortage</em>','-ship: leader → <em>leadership</em>, partner → <em>partnership</em>','-dom: free → <em>freedom</em>, wise → <em>wisdom</em>'] },
    { term:'Suffix: -ous / -ious (adj)', pos:'suffix', meaning:'Forms adjectives from nouns.', examples:['vigour → <em>vigorous</em>','ambition → <em>ambitious</em>','caution → <em>cautious</em>','contention → <em>contentious</em>','controversy → <em>controversial</em>'] },
    { term:'Suffix: -ive / -ative / -itive (adj)', pos:'suffix', meaning:'Forms adjectives denoting tendency or quality.', examples:['persuade → <em>persuasive</em>','assert → <em>assertive</em>','imagine → <em>imaginative</em>','compete → <em>competitive</em>','cognition → <em>cognitive</em>'] },
    { term:'unprecedented', pos:'adj (C2)', meaning:'Never having happened before.', examples:['The scale of the disaster was <em>unprecedented</em> in modern history.'] },
    { term:'counterproductive', pos:'adj (C2)', meaning:'Producing the opposite of the intended result.', examples:['Harsh punishments are often <em>counterproductive</em>.'] },
    { term:'irrefutable / irrefutably', pos:'adj / adv (C2)', meaning:'Impossible to disprove.', examples:['The prosecution presented what it called <em>irrefutable</em> evidence.'] },
    { term:'inexplicable / inexplicably', pos:'adj / adv (C2)', meaning:'Impossible to explain.', examples:['She <em>inexplicably</em> withdrew her application at the last moment.'] },
    { term:'indisputable / indisputably', pos:'adj / adv (C2)', meaning:'Not able to be challenged or denied.', examples:['She is <em>indisputably</em> the most qualified candidate.'] },
    { term:'inconceivable / inconceivably', pos:'adj / adv (C2)', meaning:'Impossible to imagine.', examples:['It is <em>inconceivable</em> that nobody was aware of the problem.'] },
    { term:'unequivocal / unequivocally', pos:'adj / adv (C2)', meaning:'Leaving no doubt; completely clear.', examples:['The committee\'s message was <em>unequivocal</em>: the policy must change.'] },
    { term:'disproportionate / disproportionately', pos:'adj / adv (C2)', meaning:'Too large or too small in relation to something.', examples:['The penalty was widely seen as <em>disproportionate</em> to the offence.','Women are <em>disproportionately</em> affected by the cuts.'] },
    { term:'discrepancy', pos:'noun (C2)', meaning:'A difference between things that should be the same.', examples:['There is a significant <em>discrepancy</em> between the two sets of figures.'] },
  ]
},


};
