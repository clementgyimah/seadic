//importing all necessary modules
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//requiring or import Realm database into the project
const Realm = require('realm');

export default class SearchScreen extends Component {
  //creating a constructor to handle state changes
  constructor(props) {
    super(props);
    this.state = {

      wordname: "",
      worddisplayname: "",
      wordplural: "",
      wordtense: "",
      wordother: "",
      wordabbreviation: "",
      wordarticle: "",
      wordprefix: "",
      wordsuffix: "",
      wordnoun: "",
      wordverb: "",
      wordsynonyms: "",
      wordantonyms: "",
      wordadjective: "",
      wordadverb: "",
      wordinterjection: "",
      wordpreposition: "",
      wordconjunction: "",
      wordpronoun: "",
      wordhistory: "",
      keyword: "",
      mainword: "",
    };
  }

  //the part of code to run first as soon as the app is mounted here
  componentDidMount() {
    //creating a schema (to the database) based on which some objects can be created according to in the database
    const wordSchema = {
      name: 'Word',
      properties: {
        name: 'string',
        displayname: 'string',
        plural: 'string',
        tense: 'string',
        other: 'string',
        abbreviation: 'string',
        article: 'string',
        prefix: 'string',
        suffix: 'string',
        noun: 'string',
        verb: 'string',
        synonyms: 'string',
        antonyms: 'string',
        adjective: 'string',
        adverb: 'string',
        interjection: 'string',
        preposition: 'string',
        conjunction: 'string',
        pronoun: 'string',
        history: 'string',
      }
    }

    //opening the database and creating or populating it with objects(words in this case)
    Realm.open({ schema: [wordSchema] })
      .then(realm => {
        realm.write(() => {
          const a = realm.create('Word', {
            name: 'a',
            displayname: 'a',
            plural: "\\ ˈāz  \\ \n\na's, as",
            tense: '',
            noun: '\\ ˈā  \\ \n\n1. a) the 1st letter of the English alphabet \n b) a graphic representation of this letter \n c) a speech counterpart of orthographic a \n\n 2. the sixth tone of a C-major scale \n\n 3. a graphic device for reproducing the letter a \n\n 4. one designated a especially as the first in order or class \n\n 5. a) a grade rating a student\'s work as superior in quality \n b) one graded or rated with an A \n\n 6. something shaped like the letter A \n\n 7. capitalized : the one of the four ABO blood groups characterized by the presence of antigens designated by the letter A and by the presence of antibodies against the antigens present in the B blood group',
            article: "\\ ə, (ˈ)ā  , Canadian ˈa\\ \n\nINDEFINITE ARTICLE: 1. used as a function word before singular nouns when the referent is unspecified and before number collectives and some numbers. \nExamples: a man overload, a dozen \n\n 2. the same. \nExamples: birds of a feather, swords all of a length \n\n 3. a) used as a function word before a singular noun followed by a restrictive modifier. \nExample: a man who was here yesterday \n b) ANY. \nExample: a person who is sick can\'t work \n c) used as a function word before a mass noun to denote a particular type or instance. \nExample: a bronze made in ancient times \n d) used as a function word before a proper noun representing an example or type. \nExample: the attractions of a Boston or a Cleveland \n e) the attractions of a Boston or a Cleveland. \nExample: a Mr. Smith called to inquire about the job \n f) used as a function word before a proper noun to distinguish the condition of the referent from a usual, former, or hypothetical condition. \nExample: a triumphant Ms. Jones greeted her supporters \n g) used before the name of a day of the week to refer to one occurrence of it. \nExample: Christmas falls on a Tuesday this year \n h) used before the name of a person (such as a famous artist) when the name is being used to refer to something (such as a painting) created by that person. \nExample: Her violin is a Stradivarius. \n i) used before a family name to show that someone is a member of that family. \nExample: To be a Kennedy is to lead two lives. \n\n 4. used as a function word with nouns to form adverbial phrases of quantity, amount, or degree. \nExample: felt a bit tired",
            prefix: "\\ ə\\ \n\n1. on, in, at. \nExample: abed \n\n 2. in (such) a manner. \nExample: aloud \n\n 3. in (such) a state or condition. \nExample: afire \n\n 4. in the act or process of. \nExamples: gone a-hunting, atingle \n\n \\ (ˈ)ā also (ˈ)a or (ˈ)ä\\ \n\n 5. not, without. \nExample: asexual \n\n 6. a- before consonants other than h and sometimes even before h, an- before vowels and usually before h. \nExamples: achromatic, ahistorical, anastigmatic, anhydrous",
            suffix: 'OXIDE. \nExample: silica',
            other: '',
            abbreviation: '1. absent \n\n2. acceleration \n\n3. acre \n\n4. adult \n\n5. alto \n\n6. chemistry amorphous —usually used in combination a-Si \n\n7. anode \n\n8. answer \n\n9. ante \n\n10. anterior \n\n11. are \n\n12. area \n\n13. atto- \n\n14. author',
            verb: "\\ ə, (ˌ)a  \\ \n\nHAVE. \nExample: I might a had husbands afore now",
            synonyms: "",
            antonyms: "",
            adjective: '',
            adverb: '',
            interjection: '',
            preposition: "\\ ə also (ˈ)ā  \\ \n\n1. in, to, or for each. \nExample: twice a week \n\n 2. OF — often attached to the preceding word. \nExamples: kinda, lotta \n\n 3. HAVE. \nExample: I might a had husbands afore now",
            conjunction: '',
            pronoun: '',
            history: "1. First Known Use of a: before the 12th century.",
          });

          const aa = realm.create('Word', {
            name: 'aa',
            displayname: 'aa',
            plural: "Noun: AAs ",
            tense: '',
            noun: " \ ˈdə-bəl-ˈā  \\ \n\nAA BATTERY",
            article: '',
            prefix: '',
            suffix: '',
            other: '',
            abbreviation: "1. ana \n\n2. administrative assistant \n\n3. Alcoholics Anonymous \n\n4. antiaircraft \n\n5. arachidonic acid \n\n6. associate in arts \n\n7. author's alterations",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: '',
            adverb: '',
            interjection: '',
            preposition: '',
            conjunction: '',
            pronoun: '',
            history: 'First Known Use of aa: 1937',
          });

          const aaa = realm.create('Word', {
            name: 'aaa',
            displayname: 'AAA',
            plural: "Noun: AAAs ",
            tense: '',
            noun: " \\ ˈtri-pəl-ˈā  \\ \n\nAAA BATTERY",
            article: '',
            prefix: '',
            suffix: '',
            other: '',
            abbreviation: "1. adult album alternative —used to refer to a radio station that plays adult alternative music. \nExample: Except for an occasional taste of world music, … most AAA stations program a consistently suburban (i.e., largely white) sound. \n\n2. Agricultural Adjustment Administration \n\n3. American Automobile Association",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: '',
            adverb: '',
            interjection: '',
            preposition: '',
            conjunction: '',
            pronoun: '',
            history: 'First Known Use of AAA: 1964',
          });

          const aah = realm.create('Word', {
            name: 'aah',
            displayname: 'aah',
            plural: "aahs also ahs",
            tense: 'aahed also ahed; \naahing also ahing',
            noun: '',
            article: '',
            prefix: '',
            suffix: '',
            other: '',
            abbreviation: "",
            verb: " \\ ˈä  , often prolonged and/or followed by ə\\ \n\nIntransitive verb: to exclaim in amazement, joy, or surprise. \nExample: oohing and aahing at the fireworks",
            synonyms: "",
            antonyms: "",
            adjective: '',
            adverb: '',
            interjection: '',
            preposition: '',
            conjunction: '',
            pronoun: '',
            history: 'First Known Use of aah. \nNoun: 1843',
          });

          const aahed = realm.create('Word', {
            name: 'aahed',
            displayname: 'aah',
            plural: "aahs also ahs",
            tense: 'aahed also ahed; \naahing also ahing',
            noun: '',
            article: '',
            prefix: '',
            suffix: '',
            other: '',
            abbreviation: "",
            verb: " \\ ˈä  , often prolonged and/or followed by ə\\ \n\nIntransitive verb: to exclaim in amazement, joy, or surprise. \nExample: oohing and aahing at the fireworks",
            synonyms: "",
            antonyms: "",
            adjective: '',
            adverb: '',
            interjection: '',
            preposition: '',
            conjunction: '',
            pronoun: '',
            history: 'First Known Use of aah. \nNoun: 1843',
          });

          const aahing = realm.create('Word', {
            name: 'aahing',
            displayname: 'aah',
            plural: "aahs also ahs",
            tense: 'aahed also ahed; \naahing also ahing',
            noun: '',
            article: '',
            prefix: '',
            suffix: '',
            other: '',
            abbreviation: "",
            verb: " \\ ˈä  , often prolonged and/or followed by ə\\ \n\nIntransitive verb: to exclaim in amazement, joy, or surprise. \nExample: oohing and aahing at the fireworks",
            synonyms: "",
            antonyms: "",
            adjective: '',
            adverb: '',
            interjection: '',
            preposition: '',
            conjunction: '',
            pronoun: '',
            history: 'First Known Use of aah. \nNoun: 1843',
          });

          const aahs = realm.create('Word', {
            name: 'aahs',
            displayname: 'aahs',
            plural: "aahs also ahs",
            tense: 'aahed also ahed; \naahing also ahing',
            noun: '',
            article: '',
            prefix: '',
            suffix: '',
            other: '',
            abbreviation: "",
            verb: " \\ ˈä  , often prolonged and/or followed by ə\\ \n\nIntransitive verb: to exclaim in amazement, joy, or surprise. \nExample: oohing and aahing at the fireworks",
            synonyms: "",
            antonyms: "",
            adjective: '',
            adverb: '',
            interjection: '',
            preposition: '',
            conjunction: '',
            pronoun: '',
            history: 'First Known Use of aah. \nNoun: 1843',
          });

          const aal = realm.create('Word', {
            name: 'aal',
            displayname: 'AAL',
            plural: "",
            tense: '',
            noun: '',
            article: '',
            prefix: '',
            suffix: '',
            other: '',
            abbreviation: "anterior axillary line",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: '',
            adverb: '',
            interjection: '',
            preposition: '',
            conjunction: '',
            pronoun: '',
            history: '',
          });

          const aalii = realm.create('Word', {
            name: 'aalii',
            displayname: 'aalii',
            plural: "aaliis",
            tense: '',
            noun: " aa·​lii | \\ ä-ˈlē-ˌē  \\ \n\nHawaii. \nExample: a hopbush (Dodonaea viscosa)",
            article: '',
            prefix: '',
            suffix: '',
            other: '',
            abbreviation: "anterior axillary line",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: '',
            adverb: '',
            interjection: '',
            preposition: '',
            conjunction: '',
            pronoun: '',
            history: "First Known Use of aalii: 1880 \n\nHistory and Etymology for aalii: borrowed from Hawaiian 'a'ali'i",
          });

          const aaliis = realm.create('Word', {
            name: 'aaliis',
            displayname: 'aalii',
            plural: "aaliis",
            tense: '',
            noun: " aa·​lii | \\ ä-ˈlē-ˌē  \\ \n\nHawaii. \nExample: a hopbush (Dodonaea viscosa)",
            article: '',
            prefix: '',
            suffix: '',
            other: '',
            abbreviation: "anterior axillary line",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: '',
            adverb: '',
            interjection: '',
            preposition: '',
            conjunction: '',
            pronoun: '',
            history: "First Known Use of aalii: 1880 \n\nHistory and Etymology for aalii: borrowed from Hawaiian 'a'ali'i",
          });

          const aardvark = realm.create('Word', {
            name: 'aardvark',
            displayname: 'aardvark',
            plural: "",
            tense: '',
            noun: " aard·​vark | \\ ˈärd-ˌvärk  \\ \n\na large burrowing nocturnal mammal (Orycteropus afer) of sub-Saharan Africa that has a long snout, extensible tongue, powerful claws, large ears, and heavy tail and feeds especially on termites and ants. \nExample: a) Ali the aardvark gave birth to the 3-pound baby boy late in December. \nb) Hippos and aardvarks also give milk without being anesthetized.",
            article: '',
            prefix: '',
            suffix: '',
            other: '',
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: '',
            adverb: '',
            interjection: '',
            preposition: '',
            conjunction: '',
            pronoun: '',
            history: "First Known Use of aardvark: 1822 \n\nHistory and Etymology for aardvark: borrowed from early Afrikaans aardvarken (modern erdvark), from aarde \"earth\" + vark \"hog\"; akin to Old English eorthe \"earth\" and to Old English fearh \"young pig\" — more at EARTH entry 1, FARROW entry 1 \nNOTE: Current Afrikaans erdvark, as against early aardvarken, aardvark (with Afrikaans loss of the Dutch final syllable), reflects early competition in Afrikaans between standard Dutch aarde and the North/South Holland form erd(e) (with lengthened [e] or [ε]); as a simplex Afrikaans retains both with different senses: erd, \"earth, clay,\" aarde \"earth (the planet).\"",
          });

          const aardwolf = realm.create('Word', {
            name: "aardwolf",
            displayname: "aardwolf",
            plural: "\\ -​ˌwu̇lvz  \\ \n\naardwolves",
            tense: "",
            noun: "aard·​wolf | \\ -ˌwu̇lf  \\ \n\na maned striped nocturnal mammal (Proteles cristatus) of southern and eastern Africa that resembles the related hyenas and feeds chiefly on insects and especially termites",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of aardwolf: 1833 \n\nHistory and Etymology for aardwolf: borrowed from early Afrikaans, from aarde \"earth\" + wolf \"wolf\"; akin to Old English eorthe \"earth\" and to Old English wulf \"wolf\" — more at EARTH entry 1, WOLF entry 1",
          });

          const aardwolves = realm.create('Word', {
            name: "aardwolves",
            displayname: "aardwolf",
            plural: "\\ -​ˌwu̇lvz  \\ \n\naardwolves",
            tense: "",
            noun: "aard·​wolf | \\ -ˌwu̇lf  \\ \n\na maned striped nocturnal mammal (Proteles cristatus) of southern and eastern Africa that resembles the related hyenas and feeds chiefly on insects and especially termites",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of aardwolf: 1833 \n\nHistory and Etymology for aardwolf: borrowed from early Afrikaans, from aarde \"earth\" + wolf \"wolf\"; akin to Old English eorthe \"earth\" and to Old English wulf \"wolf\" — more at EARTH entry 1, WOLF entry 1",
          });

          const argh = realm.create('Word', {
            name: "argh",
            displayname: "argh",
            plural: "",
            tense: "",
            noun: "",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "\\ ˈärf, ˈärḵ\\ \n\ndialectal, England \n TIMID, COWARDLY",
            adverb: "",
            interjection: "\\ ˈärg  \\ \n\nvariants: or aargh or aaargh \n\n1. used typically to express frustration, disappointment, anguish, or pain. \nExample: a) I was in Hawaii and I flipped on the TV and it was on. I was like, “Argh, I can't get away from it.”  \nb) “Aaargh!” said Ron as another twisted limb punched a large dent into his door …  \nc) … the dog wants to be walked, the bills need to be paid and 346 emails have to be answered. Aaargh! \nd) I'm a little more beat up this year … I'll tell you when it feels like it, when you go to bed. When you wake up you go, “Aargh.”",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of argh: \nAdjective: before the 12th century \nInterjection: 1800 \n\nHistory and Etymology for argh \nAdjective: Middle English, cowardly, lazy, slow, wretched, from Old English earg; akin to Old Frisian erg evil, bad, Old High German arg, arag cowardly, worthless, stingy, Old Norse argr evil, homosexual, effeminate, Avestan ərəgant- evil, repulsive, Lithuanian aržus sensual, lustful ",
          });

          const aargh = realm.create('Word', {
            name: "aargh",
            displayname: "argh",
            plural: "",
            tense: "",
            noun: "",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "\\ ˈärf, ˈärḵ\\ \n\ndialectal, England \n TIMID, COWARDLY",
            adverb: "",
            interjection: "\\ ˈärg  \\ \n\nvariants: or aargh or aaargh \n\n1. used typically to express frustration, disappointment, anguish, or pain. \nExample: a) I was in Hawaii and I flipped on the TV and it was on. I was like, “Argh, I can't get away from it.”  \nb) “Aaargh!” said Ron as another twisted limb punched a large dent into his door …  \nc) … the dog wants to be walked, the bills need to be paid and 346 emails have to be answered. Aaargh! \nd) I'm a little more beat up this year … I'll tell you when it feels like it, when you go to bed. When you wake up you go, “Aargh.”",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of argh: \nAdjective: before the 12th century \nInterjection: 1800 \n\nHistory and Etymology for argh \nAdjective: Middle English, cowardly, lazy, slow, wretched, from Old English earg; akin to Old Frisian erg evil, bad, Old High German arg, arag cowardly, worthless, stingy, Old Norse argr evil, homosexual, effeminate, Avestan ərəgant- evil, repulsive, Lithuanian aržus sensual, lustful ",
          });

          const aaron = realm.create('Word', {
            name: "aaron",
            displayname: "Aaron",
            plural: "",
            tense: "",
            noun: "Aar·​on | \\ ˈa-rən  , ˈer-ən\\  \n\na brother of Moses and high priest of the Hebrews \n\n Aar·​on | \\ ˈer-ən  \\ \n\nbiographical name: Hank 1934–  Henry Louis Aaron American baseball player",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of Aaron \nNoun: before the 12th century \n\nHistory and Etymology for Aaron \nNoun: Late Latin, from Greek Aarōn, from Hebrew Ahărōn",
          });

          const aaronic = realm.create('Word', {
            name: "aaronic",
            displayname: "aaronic",
            plural: "",
            tense: "",
            noun: "",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "Aa·​ron·​ic | \\ a-ˈrä-nik  , er-ˈä-\\ \n\n 1.  of or stemming from Aaron \n\n2. of or relating to the lower order of the Mormon priesthood",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of Aaronic: 1652",
          });

          const aaronite = realm.create('Word', {
            name: "aaronite",
            displayname: "aaronite",
            plural: "Aaronites",
            tense: "",
            noun: "Aa·​ron·​ite | \\ ˈa-rə-ˌnīt, ˈer-ə-\\  \n\n a priestly descendant of Aaron",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of Aaronite: 14th century \n\nHistory and Etymology for Aaronite: Aaron + -ITE entry 1",
          });

          const aas = realm.create('Word', {
            name: "aas",
            displayname: "aas",
            plural: "",
            tense: "",
            noun: "",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "associate in applied science",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "",
          });

          const aasvogel = realm.create('Word', {
            name: "aasvogel",
            displayname: "aasvogel",
            plural: "aasvogels",
            tense: "",
            noun: "aas·​vo·​gel | \\ ˈäs-ˌfō-gəl\\ \n\n variants: or less commonly aasvoel \\ ˈäs-​ˌfō-​əl \\ \n\n Africa:  VULTURE",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of aasvogel: 1821 \n\nHistory and Etymology for aasvogel: obsolete Afrikaans aasvogel (now aasvoël), from aas carrion + vogel (now voël) bird; akin to Old English etan to eat and to Old English fugol bird",
          });

          const aasvogels = realm.create('Word', {
            name: "aasvogels",
            displayname: "aasvogel",
            plural: "aasvogels",
            tense: "",
            noun: "aas·​vo·​gel | \\ ˈäs-ˌfō-gəl\\ \n\n variants: or less commonly aasvoel \\ ˈäs-​ˌfō-​əl \\ \n\n Africa:  VULTURE",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of aasvogel: 1821 \n\nHistory and Etymology for aasvogel: obsolete Afrikaans aasvogel (now aasvoël), from aas carrion + vogel (now voël) bird; akin to Old English etan to eat and to Old English fugol bird",
          });

          const ab = realm.create('Word', {
            name: "ab",
            displayname: "ab",
            plural: "",
            tense: "",
            noun: "\\ ˈab  \\ \n\n1. an abdominal muscle —usually used in plural \n\n \\ ˈäb  , ˈäv  , ˈȯv  \\ \n\n2.  the 11th month of the civil year or the 5th month of the ecclesiastical year in the Jewish calendar \n\n \\ ˈā-ˈbē  \\ \n\n3. the one of the four ABO blood groups characterized by the presence of antigens designated by the letters A and B and by the absence of antibodies against these antigens",
            article: "",
            prefix: " from : away : off \nExample: abaxial",
            suffix: "",
            other: "",
            abbreviation: "1. about \n\n2. able seaman; able-bodied seaman \n\n3. airborne \n\n4. airman basic \n\n5. Alberta \n\n6. abort; abortion \n\n7. [ New Latin artium baccalaureus ] bachelor of arts",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of ab \n Noun (1): 1956 \nNoun (2): circa 1771 \nNoun (3): 1927 \n\nHistory and Etymology for ab \nNoun (2): Hebrew Ābh \nPrefix: Middle English, from Anglo-French & Latin; Anglo-French, from Latin ab-, abs-, a-, from ab, a — more at OF",
          });

          const aba = realm.create('Word', {
            name: "aba",
            displayname: "aba",
            plural: "",
            tense: "",
            noun: "\\ ə-ˈbä  , a-, ˈä-bə\\ \n\n1. a loose sleeveless outer garment worn as traditional dress by men in the Middle East \n\n2. a fabric woven from the hair of camels or goats",
            article: "",
            prefix: "",
            suffix: "",
            other: " \\ ˈä-bä  \\ \n\n geographical name: town in southeastern Nigeria population 932,000",
            abbreviation: "1. Amateur Boxing Association \n\n2. American Bar Association \n\n3. American Booksellers Association \n\n4. applied behavior analysis",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of aba \nNoun: 1792 \n\n History and Etymology for aba \nNoun: Arabic ʽabā'",
          });

          const Ababda = realm.create('Word', {
            name: "Ababda",
            displayname: "Ababda",
            plural: "Ababda or Ababdas or Ababdeh or Ababdehs",
            tense: "",
            noun: "Abab·​da | \\ ə-ˈbab-də\\  \n\n variants: or Ababdeh \\ ə-​ˈbab-​de \\  \n\n 1. an Arabic-speaking mostly nomadic Beja people of Upper Egypt \n\n 2. a member of the Ababda people",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of Ababda: 1820 \n\n History and Etymology for Ababda: borrowed from Arabic ʽAbābda (singular ʽabbādī)",
          });

          const ababdeh = realm.create('Word', {
            name: "ababdeh",
            displayname: "ababdeh",
            plural: "Ababda or Ababdas or Ababdeh or Ababdehs",
            tense: "",
            noun: "Abab·​da | \\ ə-ˈbab-də\\  \n\n variants: or Ababdeh \\ ə-​ˈbab-​de \\  \n\n 1. an Arabic-speaking mostly nomadic Beja people of Upper Egypt \n\n 2. a member of the Ababda people",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of Ababda: 1820 \n\n History and Etymology for Ababda: borrowed from Arabic ʽAbābda (singular ʽabbādī)",
          });

          const abaca = realm.create('Word', {
            name: "abaca",
            displayname: "abaca",
            plural: "abacas",
            tense: "",
            noun: "ab·​a·​ca | \\ ˌa-bə-ˈkä  , ˈa-bə-ˌ\\ \n\n 1. a strong fiber obtained from the leafstalk of a banana (Musa textilis) native to the Philippines — called also Manila hemp \n\n 2. the plant that yields abaca",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abaca: 1751 \n\n History and Etymology for abaca: Spanish abacá, from Tagalog abaká",
          });

          const abacas = realm.create('Word', {
            name: "abacas",
            displayname: "abaca",
            plural: "abacas",
            tense: "",
            noun: "ab·​a·​ca | \\ ˌa-bə-ˈkä  , ˈa-bə-ˌ\\ \n\n 1. a strong fiber obtained from the leafstalk of a banana (Musa textilis) native to the Philippines — called also Manila hemp \n\n 2. the plant that yields abaca",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abaca: 1751 \n\n History and Etymology for abaca: Spanish abacá, from Tagalog abaká",
          });

          const abacate = realm.create('Word', {
            name: "abacate",
            displayname: "abacate",
            plural: "abacates",
            tense: "",
            noun: "aba·​ca·​te | \\ ˌa-bə-ˈkä-tē\\  \n\n  1. AVOCADO",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abacate: 1860 \n\n History and Etymology for abacate: borrowed from Portuguese, probably borrowed from a regional variant of Spanish aguacate",
          });

          const abacates = realm.create('Word', {
            name: "abacates",
            displayname: "abacate",
            plural: "abacates",
            tense: "",
            noun: "aba·​ca·​te | \\ ˌa-bə-ˈkä-tē\\  \n\n  1. AVOCADO",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abacate: 1860 \n\n History and Etymology for abacate: borrowed from Portuguese, probably borrowed from a regional variant of Spanish aguacate",
          });

          const abacaxi = realm.create('Word', {
            name: "abacaxi",
            displayname: "abacaxi",
            plural: "abacaxis",
            tense: "",
            noun: "aba·​ca·​xi | \\ ¦a-bə-kə-¦shē\\ \n\n 1.  a large, sweet pineapple grown especially in Brazil",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abacaxi: 1866 \n\n History and Etymology for abacaxi: borrowed from Brazilian Portuguese, “pineapple, variety of pineapple,” perhaps borrowed from Tupi *ɨβakati, from ɨβa “plant, fruit” + kati “fragrant”",
          });

          const abacaxis = realm.create('Word', {
            name: "abacaxis",
            displayname: "abacaxi",
            plural: "abacaxis",
            tense: "",
            noun: "aba·​ca·​xi | \\ ¦a-bə-kə-¦shē\\ \n\n 1.  a large, sweet pineapple grown especially in Brazil",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abacaxi: 1866 \n\n History and Etymology for abacaxi: borrowed from Brazilian Portuguese, “pineapple, variety of pineapple,” perhaps borrowed from Tupi *ɨβakati, from ɨβa “plant, fruit” + kati “fragrant”",
          });

          const abaci = realm.create('Word', {
            name: "abaci",
            displayname: "abacus",
            plural: "abaci\\ ˈa-​bə-​ˌsī  , -​ˌkē ; ə-​ˈba-​ˌkī  \\ or abacuses",
            tense: "",
            noun: "aba·​cus | \\ ˈa-bə-kəs  , ə-ˈba-  \\ \n\n 1. an instrument for performing calculations by sliding counters along rods or in grooves \n\n2. a slab that forms the uppermost member or division of the capital of a column",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abacus: 14th century \n\nHistory and Etymology for abacus: Latin, from Greek abak-, abax, literally, slab",
          });

          const abacuses = realm.create('Word', {
            name: "abacuses",
            displayname: "abacus",
            plural: "abaci\\ ˈa-​bə-​ˌsī  , -​ˌkē ; ə-​ˈba-​ˌkī  \\ or abacuses",
            tense: "",
            noun: "aba·​cus | \\ ˈa-bə-kəs  , ə-ˈba-  \\ \n\n 1. an instrument for performing calculations by sliding counters along rods or in grooves \n\n2. a slab that forms the uppermost member or division of the capital of a column",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abacus: 14th century \n\nHistory and Etymology for abacus: Latin, from Greek abak-, abax, literally, slab",
          });

          const abacus = realm.create('Word', {
            name: "abacus",
            displayname: "abacus",
            plural: "abaci\\ ˈa-​bə-​ˌsī  , -​ˌkē ; ə-​ˈba-​ˌkī  \\ or abacuses",
            tense: "",
            noun: "aba·​cus | \\ ˈa-bə-kəs  , ə-ˈba-  \\ \n\n 1. an instrument for performing calculations by sliding counters along rods or in grooves \n\n2. a slab that forms the uppermost member or division of the capital of a column",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abacus: 14th century \n\nHistory and Etymology for abacus: Latin, from Greek abak-, abax, literally, slab",
          });

          const abaciscus = realm.create('Word', {
            name: "abaciscus",
            displayname: "abaciscus",
            plural: "abacisci\\ ˌa-​bə-​ˈsi-​ˌsī , -​ˈki-​ˌskē , -​ˈki-​ˌskī \\",
            tense: "",
            noun: "ab·​a·​cis·​cus | \\ ˌa-bə-ˈsi-skəs, -ˈki-\\ \n\n 1.  ABACULUS",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abaciscus: 1753 \n\n History and Etymology for abaciscus: Latinization of Late Greek abakískos, diminutive of Greek abak-, ábax “slab, board”",
          });

          const abacisci = realm.create('Word', {
            name: "abacisci",
            displayname: "abaciscus",
            plural: "abacisci\\ ˌa-​bə-​ˈsi-​ˌsī , -​ˈki-​ˌskē , -​ˈki-​ˌskī \\",
            tense: "",
            noun: "ab·​a·​cis·​cus | \\ ˌa-bə-ˈsi-skəs, -ˈki-\\ \n\n 1.  ABACULUS",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abaciscus: 1753 \n\n History and Etymology for abaciscus: Latinization of Late Greek abakískos, diminutive of Greek abak-, ábax “slab, board”",
          });

          const abacist = realm.create('Word', {
            name: "abacist",
            displayname: "abacist",
            plural: "abacists",
            tense: "",
            noun: "aba·​cist | \\ ˈa-bə-sist, -kist, ə-ˈba-kist\\ \n\n  one that uses an abacus",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abacist: 14th century \n\n History and Etymology for abacist: Middle English, borrowed from Medieval Latin abacista, from Latin abacus ABACUS + -ista -IST entry 1",
          });

          const abacists = realm.create('Word', {
            name: "abacists",
            displayname: "abacist",
            plural: "abacists",
            tense: "",
            noun: "aba·​cist | \\ ˈa-bə-sist, -kist, ə-ˈba-kist\\ \n\n  one that uses an abacus",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abacist: 14th century \n\n History and Etymology for abacist: Middle English, borrowed from Medieval Latin abacista, from Latin abacus ABACUS + -ista -IST entry 1",
          });

          const aback = realm.create('Word', {
            name: "aback",
            displayname: "aback",
            plural: "",
            tense: "",
            noun: "",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "1. suddenly \n\n 2. unanticipatedly \n\n 3. unaware \n\n 4. unawares \n\n 5. unexpectedly",
            antonyms: "",
            adjective: "",
            adverb: "\\ ə-ˈbak  \\ \n\n 1. archaic : BACKWARD, BACK \n\n 2. in a position to catch the wind upon the forward surface (as of a sail) \n\n 3.  by surprise : UNAWARES. \n Example: was taken aback by her sharp retort",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of aback: before the 12th century",
          });

          const abacot = realm.create('Word', {
            name: "abacot",
            displayname: "abacot",
            plural: "",
            tense: "",
            noun: "variant of BYCOKET",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "",
          });

          const abacterial = realm.create('Word', {
            name: "abacterial",
            displayname: "abacterial",
            plural: "",
            tense: "",
            noun: "",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "abac·​te·​ri·​al | \\ ˌā-(ˌ)bak-ˈtir-ē-əl  \\ \\n\n not caused by or characterized by the presence of bacteria. \n Example: abacterial prostatitis",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abacterial: 1888",
          });

          const abactinal = realm.create('Word', {
            name: "abactinal",
            displayname: "abactinal",
            plural: "",
            tense: "",
            noun: "",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "ab·​ac·​ti·​nal | \ (ˈ)a-¦bak-tə-nᵊl, ¦a-ˌbak-¦tī-nᵊl\\ \n\n of or relating to the surface or end opposite to the mouth in a radiate animal",
            adverb: "abactinally",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abactinal: 1857 \n\n History and Etymology for abactinal: AB- entry 1 + ACTINAL",
          });

          const abactinally = realm.create('Word', {
            name: "abactinally",
            displayname: "abactinal",
            plural: "",
            tense: "",
            noun: "",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "ab·​ac·​ti·​nal | \ (ˈ)a-¦bak-tə-nᵊl, ¦a-ˌbak-¦tī-nᵊl\\ \n\n of or relating to the surface or end opposite to the mouth in a radiate animal",
            adverb: "abactinally",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abactinal: 1857 \n\n History and Etymology for abactinal: AB- entry 1 + ACTINAL",
          });

          const abactor = realm.create('Word', {
            name: "abactor",
            displayname: "abactor",
            plural: "abactors",
            tense: "",
            noun: "ab·​ac·​tor | \\ (ˈ)a-¦bak-tər\\ \n\n one who steals cattle",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abactor: 1659 \n\n History and Etymology for abactor: borrowed from Latin abāctor, from abigere “to drive away” (from ab- AB- entry 1 + agere “to drive” + -tor, agent suffix",
          });

          const abactors = realm.create('Word', {
            name: "abactors",
            displayname: "abactor",
            plural: "abactors",
            tense: "",
            noun: "ab·​ac·​tor | \\ (ˈ)a-¦bak-tər\\ \n\n one who steals cattle",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abactor: 1659 \n\n History and Etymology for abactor: borrowed from Latin abāctor, from abigere “to drive away” (from ab- AB- entry 1 + agere “to drive” + -tor, agent suffix",
          });

          const abaculus = realm.create('Word', {
            name: "abaculus",
            displayname: "abaculus",
            plural: "abaculi \n\n \\ ə-​ˈba-​kyə-​ˌlī , -​ˌlē \\",
            tense: "",
            noun: "abac·​u·​lus | \\ ə-ˈba-kyə-ləs\\ \n\n a tile used in mosaic : TESSERA",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abaculus: 1844 \n\n History and Etymology for abaculus: misreading of Latin ab oculīs “out of view,” as if diminutive of abacus ABACUS",
          });

          const abaculi = realm.create('Word', {
            name: "abaculi",
            displayname: "abaculus",
            plural: "abaculi \n\n \\ ə-​ˈba-​kyə-​ˌlī , -​ˌlē \\",
            tense: "",
            noun: "abac·​u·​lus | \\ ə-ˈba-kyə-ləs\\ \n\n a tile used in mosaic : TESSERA",
            article: "",
            prefix: "",
            suffix: "",
            other: "",
            abbreviation: "",
            verb: "",
            synonyms: "",
            antonyms: "",
            adjective: "",
            adverb: "",
            interjection: "",
            preposition: "",
            conjunction: "",
            pronoun: "",
            history: "First Known Use of abaculus: 1844 \n\n History and Etymology for abaculus: misreading of Latin ab oculīs “out of view,” as if diminutive of abacus ABACUS",
          });

        })


        //setting the state of a particular variable called 'keyword' to the word gotten from the search of a word
        this.setState({ keyword: this.props.navigation.state.params.searchword })

        //setting a local variable called 'keyword' to the value of the global state variable called 'keyword'
        keyword = this.state.keyword

        //filtering the words in the database to find the word that matches with what has been searched. It will be put in a list containing only that one word
        mainword = realm.objects('Word').filtered(`name = "${keyword}"`)

        //setting the state of some global-state variables to the properties of the word being searched
        this.setState({
          wordname: mainword[0].name, worddisplayname: mainword[0].displayname, wordtense: mainword[0].tense, wordhistory: mainword[0].history, wordplural: mainword[0].plural, wordprefix: mainword[0].prefix, wordsuffix: mainword[0].suffix, wordother: mainword[0].other, wordabbreviation: mainword[0].abbreviation, wordarticle: mainword[0].article, wordnoun: mainword[0].noun, wordverb: mainword[0].verb, wordsynonyms: mainword[0].synonyms,
          wordantonyms: mainword[0].antonyms, wordadjective: mainword[0].adjective, wordadverb: mainword[0].adverb, wordinterjection: mainword[0].interjection,
          wordpreposition: mainword[0].preposition, wordconjunction: mainword[0].conjunction, wordpronoun: mainword[0].pronoun
        })

        realm.close();
      }
      )

      //this part will catch any error that will be encountered in opening the database
      .catch(error => {
        console.log('There was an error in opening the database.')
      })

  }


  //creating different functions (<functionname>decide ) to decide whether some properties of some words should be shown on the screen or not
  otherdecide() {
    if (this.state.wordother !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Other:</Text>
          <Text style={styles.deftxt}> {this.state.wordother}</Text>
        </View>
      )
    }
  }

  pluraldecide() {
    if (this.state.wordplural !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Plural:</Text>
          <Text style={styles.deftxt}> {this.state.wordplural}</Text>
        </View>
      )
    }
  }

  tensedecide() {
    if (this.state.wordtense !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Tense:</Text>
          <Text style={styles.deftxt}> {this.state.wordtense}</Text>
        </View>
      )
    }
  }

  historydecide() {
    if (this.state.wordhistory !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>History:</Text>
          <Text style={styles.deftxt}> {this.state.wordhistory}</Text>
        </View>
      )
    }
  }

  articledecide() {
    if (this.state.wordarticle !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Article:</Text>
          <Text style={styles.deftxt}> {this.state.wordarticle}</Text>
        </View>
      )
    }
  }

  prefixdecide() {
    if (this.state.wordprefix !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Prefix:</Text>
          <Text style={styles.deftxt}> {this.state.wordprefix}</Text>
        </View>
      )
    }
  }

  suffixdecide() {
    if (this.state.wordsuffix !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Suffix:</Text>
          <Text style={styles.deftxt}> {this.state.wordsuffix}</Text>
        </View>
      )
    }
  }

  abbreviationdecide() {
    if (this.state.wordabbreviation !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Abbreviation:</Text>
          <Text style={styles.deftxt}> {this.state.wordabbreviation}</Text>
        </View>
      )
    }
  }

  noundecide() {
    if (this.state.wordnoun !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Noun:</Text>
          <Text style={styles.deftxt}> {this.state.wordnoun}</Text>
        </View>
      )
    }
  }

  verbdecide() {
    if (this.state.wordverb !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Verb:</Text>
          <Text style={styles.deftxt}> {this.state.wordverb}</Text>
        </View>
      )
    }
  }

  synonymsdecide() {
    if (this.state.wordsynonyms !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Synonyms:</Text>
          <Text style={styles.deftxt}> {this.state.wordsynonyms}</Text>
        </View>
      )
    }
  }

  antonymsdecide() {
    if (this.state.wordantonyms !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Antonyms:</Text>
          <Text style={styles.deftxt}> {this.state.wordantonyms}</Text>
        </View>
      )
    }
  }

  adjectivedecide() {
    if (this.state.wordadjective !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Adjective:</Text>
          <Text style={styles.deftxt}> {this.state.wordadjective}</Text>
        </View>
      )
    }
  }

  adverbdecide() {
    if (this.state.wordadverb !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Adverb:</Text>
          <Text style={styles.deftxt}> {this.state.wordadverb}</Text>
        </View>
      )
    }
  }

  interjectiondecide() {
    if (this.state.wordinterjection !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Interjection:</Text>
          <Text style={styles.deftxt}> {this.state.wordinterjection}</Text>
        </View>
      )
    }
  }

  prepositiondecide() {
    if (this.state.wordpreposition !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Preposition:</Text>
          <Text style={styles.deftxt}> {this.state.wordpreposition}</Text>
        </View>
      )
    }
  }

  conjunctiondecide() {
    if (this.state.wordconjunction !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Conjunction:</Text>
          <Text style={styles.deftxt}> {this.state.wordconjunction}</Text>
        </View>
      )
    }
  }

  pronoundecide() {
    if (this.state.wordpronoun !== '') {
      return (
        <View style={styles.indview}>
          <Text style={styles.indtxt}>Pronoun:</Text>
          <Text style={styles.deftxt}> {this.state.wordpronoun}</Text>
        </View>
      )
    }
  }


  //function to take care of adding a word in the bookmark
  addToBookmark(word){
    const bookmarkSchema = {
      name: 'Bookmark',
      properties:{
        name: "string",
      }
    }
    Realm.open({schema: [bookmarkSchema]})
    .then(realm => {
      realm.write(() => {
        const bookmarkword = realm.create('Bookmark', {
          name: word
        })
      })
      realm.close();
    })
  }

  //the part of the code to run first(on condition that there is no componentDidMount etc...) when this file is accessed by the app
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nameview}>
         <View style={styles.nametxtview}><Text style={styles.nametxt}> {this.state.worddisplayname}</Text></View>
         <View style={styles.bookmark}><Icon.Button name="bookmark" size={30} color="white" backgroundColor="blue" /*onPress={this.addToBookmark(this.state.wordname)}*/ ></Icon.Button></View>
        </View>
        <View style={styles.scroll}>
          <ScrollView>
            <View>

              {this.pluraldecide()}

              {this.tensedecide()}

              {this.articledecide()}

              {this.noundecide()}

              {this.verbdecide()}

              {this.adjectivedecide()}

              {this.adverbdecide()}

              {this.prepositiondecide()}

              {this.pronoundecide()}

              {this.abbreviationdecide()}

              {this.prefixdecide()}

              {this.suffixdecide()}

              {this.synonymsdecide()}

              {this.antonymsdecide()}

              {this.interjectiondecide()}

              {this.conjunctiondecide()}

              {this.historydecide()}

              {this.otherdecide()}

            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

//StyleSheet to take care of all styling in the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameview: {
    backgroundColor: "blue",
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  nametxt: {
    fontSize: 25,
    color: "white",
   
  },
  nametxtview: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center"
  }
  ,
  scroll: {
    backgroundColor: "yellow",
    flex: 8,
    padding: 10.0
  },
  indview: {
    paddingBottom: 15,
  },
  indtxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "red",
    paddingBottom: 5,
    paddingTop: 5,
  },
  deftxt: {
    fontSize: 15,
    color: "blue",
  },
  bookmark: {
    flex: 2,
    //justifyContent: "flex-start",
    alignItems: "center",
  },

})