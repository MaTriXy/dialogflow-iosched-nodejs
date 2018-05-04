// Copyright 2018, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const {
  SimpleResponse,
} = require('actions-on-google');

/* eslint-disable max-len*/
const menuPrompts = {
  attending: {
    firstTime: [
      [
        new SimpleResponse({
          speech: `<speak>Congrats! As the keeper of IO specific knowledge, consider me your guide. I can manage your schedule, help you find things to do, or give you directions. So, which do you need?</speak>`,
          text: `As the keeper of IO specific knowledge, consider me your guide. What can I help you with?`,
        }),
      ],
    ],
    repeat: [
      [
        new SimpleResponse({
          speech: `<speak>I can manage your schedule, help you find things to do, or give you directions. So, which do you need?</speak>`,
          text: `What can I help you with?`,
        }),
      ],
    ],
    suggestions: {
      'required': [
        `Manage my schedule`,
        `Find things to do`,
        `Get directions`,
      ],
    },
    noInput: [
      new SimpleResponse({
        speech: `You’re sending an empty signal here. I can manage your schedule, help you find things to do, or give you directions. Which do you need?`,
        text: `What can I help you with?`,
      }),
      new SimpleResponse({
        speech: `Do you want me to manage your schedule, help you find things to do, or give you directions?`,
        text: `Do you want me to manage your schedule, help you find things to do, or give you directions?`,
      }),
      new SimpleResponse({
        speech: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
        text: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
      }),
    ],
    fallback: [
      {
        'elements': new SimpleResponse({
          speech: `I'm getting a 4 0 4 error. Which did you want?`,
          text: `That's a 404. What did you want help with?`,
        }),
        'suggestions': {
          'required': [
            'Manage my schedule',
            'Find things to do',
            'Get directions',
          ],
        },
      },
      {
        'elements': new SimpleResponse({
          speech: `Sorry. That's beyond my expertise. Can I help you manage your schedule, find things to do, or give you directions?`,
          text: `Sorry, that's beyond my expertise. Can I help you manage your schedule, find things to do, or give you directions?`,
        }),
        'suggestions': {
          'required': [
            'Manage my schedule',
            'Find things to do',
            'Get directions',
          ],
        },
      },
      {
        'elements': new SimpleResponse({
          speech: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
          text: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
        }),
      },
    ],
  },
  notAttending: {
    firstTime: [
      [
        new SimpleResponse({
          speech: `<speak>Then I can help you stay plugged in. As the keeper of IO specific knowledge, consider me your guide. I can manage your viewing schedule, search for talks, or tell you about extended viewing parties. So, which do you need?</speak>`,
          text: `As the Keeper of I/O-Specific Knowledge, consider me your guide. What can I help you with?`,
        }),
      ],
    ],
    repeat: [
      [
        new SimpleResponse({
          speech: `<speak>I can manage your viewing schedule, search for talks, or tell you about extended viewing parties. So, which do you need?</speak>`,
          text: `What can I help you with?`,
        }),
      ],
    ],
    suggestions: {
      'required': [
        `Manage my schedule`,
        `Search for talks`,
        `What's I/O extended?`,
      ],
      'randomized': [
        'Announcements',
        'Keynotes',
        `Find office hours`,
        `Where is the food?`,
        `What's the swag?`,
        `When's the after party?`,
        'Codelabs and sandboxes',
        'Lost and found',
      ],
    },
    noInput: [
      new SimpleResponse({
        speech: `You’re sending an empty signal here. I can manage your schedule, search for talks, or tell you about extended viewing parties. Which do you need?`,
        text: `What can I help you with?`,
      }),
      new SimpleResponse({
        speech: `Do you want me to manage your schedule, search for talks, or tell you about extended viewing parties?`,
        text: `Do you want me to manage your schedule, search for talks, or tell you about extended viewing parties?`,
      }),
      new SimpleResponse({
        speech: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
        text: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
      }),
    ],
    fallback: [
      {
        'elements': new SimpleResponse({
          speech: `I'm getting a 4 0 4 error. What did you want help with?`,
          text: `That's a 404. What did you want help with?`,
        }),
        'suggestions': {
          'required': [
            `Manage my schedule`,
            `Search for talks`,
            `What's I/O extended?`,
          ],
        },
      },
      {
        'elements': new SimpleResponse({
          speech: `Sorry. That's beyond my expertise. Can I help you manage your schedule, search for talks, or tell you about extended viewing parties?`,
          text: `Sorry. That's beyond my expertise. Can I help you manage your schedule, search for talks, or tell you about extended viewing parties?`,
        }),
        'suggestions': {
          'required': [
            `Manage my schedule`,
            `Search for talks`,
            `What's I/O extended?`,
          ],
        },
      },
      {
        'elements': new SimpleResponse({
          speech: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
          text: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
        }),
      },
    ],
  },
  checkAttending: {
    firstTime: [
      [
        new SimpleResponse({
          speech: `<speak>Now, so I can help you get the most out of IO, tell me, are you one of the lucky attendees?</speak>`,
          text: `Are you one of the lucky attendees?`,
        }),
      ],
    ],
    repeat: [
      [
        new SimpleResponse({
          speech: `<speak>Now, so I can help you get the most out of IO, tell me, are you one of the lucky attendees?</speak>`,
          text: `Now, are you one of the lucky attendees?`,
        }),
      ],
    ],
    suggestions: {
      'required': [
        'yes',
        'no',
      ],
    },
    noInput: [
      `Are you attending Google IO this year?`,
      `So I can help you get the most out of Google IO, let me know if you'll be attending the developer festival this year.`,
    ],
    fallback: [
      {
        'elements': [`Sorry, are you attending IO?`],
      },
      {
        'elements': [`Before I can help you get the most out of Google IO, I need to know if you're attending the developer festival.`],
      },
    ],
  },
  thingsToDo: {
    firstTime: [
      [
        new SimpleResponse({
          speech: `Sure. Do you want to learn from the experts? Try some demos? Or kick back and relax?`,
          text: `Sure. Do you want to learn from the experts? Try some demos? Or kick back and relax? `,
        }),
      ],
    ],
    repeat: [
      [
        new SimpleResponse({
          speech: `Do you want to learn from the experts? Try some demos? Or kick back and relax?`,
          text: `Do you want to learn from the experts? Try some demos? Or kick back and relax?`,
        }),
      ],
    ],
    suggestions: {
      'required': [
        `Learn from the experts`,
        `Try some demos`,
        `Kick back and relax`,
      ],
    },
    noInput: [
      new SimpleResponse({
        speech: `I'm getting an empty signal. Do you want to learn from the experts? Try some demos? Or kick back and relax?`,
        text: `Which did you want?`,
      }),
      new SimpleResponse({
        speech: `Which sounds good? Learning from the experts, trying some demos, or kicking back and relaxing?`,
        text: `Which sounds good? Learning from the experts, trying some demos, or kicking back and relaxing?`,
      }),
      new SimpleResponse({
        speech: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
        text: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
      }),
    ],
    fallback: [
      {
        'elements': new SimpleResponse({
          speech: `Well that's a 4 0 4. Which did you want?`,
          text: `That's a 4 0 4. Which did you want?`,
        }),
        'suggestions': {
          'required': [
            `Learn from the experts`,
            `Try some demos`,
            `Kick back and relax`,
          ],
        },
      },
      {
        'elements': new SimpleResponse({
          speech: `Sorry. That's beyond my expertise. But I can help you learn from the experts, try some demos, or kick back and relax?`,
          text: `Sorry. That's beyond my expertise. But I can help you learn from the experts, try some demos, or kick back and relax?`,
        }),
        'suggestions': {
          'required': [
            `Learn from the experts`,
            `Try some demos`,
            `Kick back and relax`,
          ],
        },
      },
      {
        'elements': new SimpleResponse({
          speech: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
          text: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
        }),
      },
    ],
  },
  relax: {
    firstTime: [
      [
        new SimpleResponse({
          speech: `Sounds good. Do you wanna hear about the food, the swag, or the after hours parties?`,
          text: `Sounds good. Do you wanna hear about the food, the swag, or the after hours parties?`,
        }),
      ],
    ],
    repeat: [
      [
        new SimpleResponse({
          speech: `Now, I can tell you about the food, the swag, or the after hours parties.`,
          text: `Now, I can tell you about the food, the swag, or the after hours parties.`,
        }),
      ],
    ],
    suggestions: {
      'required': [
        `Tell me about the food`,
        `What's the swag?`,
        `When's the after party?`,
      ],
    },
    noInput: [
      new SimpleResponse({
        speech: `I'm getting an empty signal. Should I tell you about the food, swag, or after party?`,
        text: `Which did you want?`,
      }),
      new SimpleResponse({
        speech: `Which sounds good? Food, swag, or the after party?`,
        text: `Which sounds good? Food, swag, or the after party?`,
      }),
      new SimpleResponse({
        speech: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
        text: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
      }),
    ],
    fallback: [
      {
        'elements': new SimpleResponse({
          speech: `Well that's a 4 0 4. Which did you want?`,
          text: `That's a 4 0 4. Which did you want?`,
        }),
        'suggestions': {
          'required': [
            `Tell me about the food`,
            `What's the swag?`,
            `When's the after party?`,
          ],
        },
      },
      {
        'elements': new SimpleResponse({
          speech: `Sorry. That's beyond my expertise. But I can tell you about the food, the swag, or the after party.`,
          text: `Sorry. I can tell you about the food, the swag, or the after party.`,
        }),
        'suggestions': {
          'required': [
            `Tell me about the food`,
            `What's the swag?`,
            `When's the after party?`,
          ],
        },
      },
      {
        'elements': new SimpleResponse({
          speech: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
          text: `Since I'm having trouble, I'm going to call I T, though they'll probably just tell me to turn it off then on again. Bye for now.`,
        }),
      },
    ],
  },
};

const menu = (prompts, suggestions, noInput, fallback, prefixPrompts) => {
  if (prefixPrompts) {
    prompts.unshift(prefixPrompts);
  }
  return {
    'screen/speaker': [
      {
        'elements': prompts,
        'suggestions': suggestions,
        'noInput': noInput,
        'fallback': fallback,
      },
    ],
  };
};

const menuFirstTime = (prompts, prefixPrompts) => {
  return menu(prompts.firstTime, prompts.suggestions, prompts.noInput, prompts.fallback, prefixPrompts);
};

const menuRepeat = (prompts, prefixPrompts) => {
  return menu(prompts.repeat, prompts.suggestions, prompts.noInput, prompts.fallback, prefixPrompts);
};

const attendingReentry = (prefixPrompts) => [
  {
    'elements': [
      prefixPrompts,
      [
        new SimpleResponse({
          speech: `Now, I can manage your schedule, help you find things to do, or give you directions. So, which do you need?`,
          text: `Now, what else can I help you with?`,
        }),
      ],
    ],
    'suggestions': {
      'required': [
        `Manage my schedule`,
        `Find things to do`,
        `Get directions`,
      ],
    },
  },
];

const notAttendingReentry = (prefixPrompts) => [
  {
    'elements': [
      prefixPrompts,
      [
        new SimpleResponse({
          speech: `Now, you can manage your schedule, search for talks, or hear about extended viewing parties. Which do you want?`,
          text: `Now, what else can I help you with?`,
        }),
      ],
    ],
    'suggestions': {
      'required': [
        `Manage my schedule`,
        `Search for talks`,
        `What's I/O extended?`,
      ],
    },
  },
];

module.exports = {
  'checkAttending': {
    'firstTime': menuFirstTime(menuPrompts.checkAttending,
      [
        new SimpleResponse({
          speech: `Welcome to your launchpad for all things Google IO.`,
          text: `Welcome to your launchpad for all things Google I/O.`,
        }),
      ]),
    'repeat': menuRepeat(menuPrompts.checkAttending),
  },
  'attending': {
    'welcome': {
      'firstTime': menuFirstTime(menuPrompts.attending,
        [
          new SimpleResponse({
            speech: `Welcome to your launchpad for all things Google IO.`,
            text: `Welcome to your launchpad for all things Google I/O.`,
          }),
        ]),
      'repeat': menuRepeat(menuPrompts.attending),
    },
    'menu': {
      'firstTime/repeat': menuRepeat(menuPrompts.attending),
    },
    'ask-attending-yes': {
      'firstTime/repeat': menuRepeat(menuPrompts.attending),
    },
    'thingsToDoMenu': {
      'firstTime': menuFirstTime(menuPrompts.thingsToDo),
      'repeat': menuRepeat(menuPrompts.thingsToDo),
    },
    'relaxMenu': {
      'firstTime': menuFirstTime(menuPrompts.relax),
      'repeat': menuRepeat(menuPrompts.relax),
    },
    'date': {
      'firstTime/repeat': attendingReentry([
        new SimpleResponse({
          speech: `<speak> This year’s developer festival will be held May <say-as interpret-as="ordinal">8</say-as> through <say-as interpret-as="ordinal">10</say-as> California <break time="250ms"/> next to Google's main campus.<break time="750ms"/></speak>`,
          text: `This year’s developer festival will be held May 8-10 at the Shoreline Amphitheatre in Mountain View, CA`,
        }),
      ]),
    },
    'keynote': {
      'before': {
        'firstTime/repeat': attendingReentry([
          new SimpleResponse({
            speech: `<speak>The first keynote will be starting at 10AM. <break time="750ms"/>Everyone is guaranteed a seat, so head to the main stage for some exciting announcements. <break time="750ms"/>You should have time to grab lunch before the second keynote begins at 12:45PM.<break time="750ms"/></speak>`,
            text: `The first keynote starts at 10AM. Everyone is guaranteed a seat. You should have time to grab lunch before the second keynote begins at 12:45PM.`,
          }),
        ]),
      },
      'during': {
        'firstTime/repeat': attendingReentry([
          new SimpleResponse({
            speech: `<speak> The first keynote started at 10AM and the second is at 12:45PM. You should have time to grab lunch in between.<break time="750ms"/></speak>`,
            text: `The first keynote started at 10AM and the second is at 12:45PM. You should have time to grab lunch in between.`,
          }),
        ]),
      },
      'after': {
        'firstTime/repeat': attendingReentry([
          new SimpleResponse({
            speech: `<speak>The keynotes were at 10AM and 12:45PM. If you didn't get a chance to catch them in person, or wanna watch again, they'll be posted to the Google Developers YouTube channel. <break time="750ms"/></speak>`,
            text: `The keynotes were at 10AM and 12:45PM. If you want to watch again, they'll be posted to the Google Developers YouTube channel.`,
          }),
        ]),
      },
      'default': {
        'firstTime/repeat': attendingReentry([
          new SimpleResponse({
            speech: `<speak> The keynotes were on Tuesday. If you didn't get a chance to catch them in person, or wanna watch again, they'll be posted to the Google Developers YouTube channel.<break time="750ms"/></speak>`,
            text: `The keynotes were on Tuesday. If you want to watch again, they'll be posted to the Google Developers YouTube channel.`,
          }),
        ]),
      },
    },
    'codelabs': {
      'firstTime/repeat': attendingReentry([
        new SimpleResponse({
          speech: `<speak>Codelabs and Sandboxes are all about hands-on inspiration.<break time="750ms"/> Come to the Codelabs to try out short coding experiences, with Googlers as your guide.<break time="750ms"/> Swing by the Sandboxes to chat with Googlers as they demo the latest interactive experiences built on the Google developer platform.<break time="750ms"/></speak>`,
          text: `Codelabs and Sandboxes are all about hands-on inspiration, like trying out short coding experiences or demoing the latest interactive experiences built on the Google developer platform.`,
        }),
      ]),
    },
    'appReview': {
      'firstTime/repeat': attendingReentry([
        new SimpleResponse({
          speech: `<speak>Attendees will be able to improve their projects by getting advice and on-the-spot reviews from Googlers during office hours and app reviews. You can choose between App Consultations and Design Reviews.<break time="750ms"/></speak>`,
          text: `Attendees will be able to improve their projects by getting advice and on-the-spot reviews from Googlers during app reviews. You can choose between App Consultations and Design Reviews.`,
        }),
      ]),
    },
    'food': {
      'firstTime/repeat': attendingReentry([
        new SimpleResponse({
          speech: `<speak>You'll be able to enjoy complimentary breakfast, lunch, and snacks throughout the conference. You can even grab dinner during the after parties. <break time="500ms"/>Breakfast is from 7 to 9:30AM, and lunch goes from 11:30AM to 2:30PM. <break time="750ms"/></speak>`,
          text: `You can enjoy complimentary breakfast (7-9:30AM), lunch (11:30AM-2:30PM), and snacks throughout the conference, and grab dinner during the after parties.`,
        }),
      ]),
    },
    'swag': {
      'firstTime/repeat': attendingReentry([
        new SimpleResponse({
          speech: `<speak> There are rumors of swag at IO. Some say, if you believe hard enough, it may appear. <break time="750ms"/></speak>`,
          text: `There are rumors of swag at IO. Some say, if you believe hard enough, it may appear.`,
        }),
      ]),
    },
    'afterParty': {
      'firstDay': {
        'firstTime/repeat': attendingReentry([
          new SimpleResponse({
            speech: `<speak> Tonight's after party starts at 7PM here in the Amphitheatre. Stop by for music, games, and more. Food and drinks will be served, with alcoholic beverages available for those 21 and over. Don't forget your ID and attendee badge.<break time="750ms"/></speak>`,
            text: `Tonight's after party starts at 7PM here in the Amphitheatre. Stop by for music, games, and more. Food and drinks will be served, with alcoholic beverages available for those 21 and over. Don't forget your ID and attendee badge.`,
          }),
        ]),
      },
      'secondDay': {
        'firstTime/repeat': attendingReentry([
          new SimpleResponse({
            speech: `<speak> Tonight's after party features an exclusive concert here in the Amphitheater, starting at 8:30. Food and drinks will be served, with alcoholic beverages available for those 21 and over. Don't forget your ID and attendee badge.<break time="750ms"/></speak>`,
            text: `Tonight's after party features an exclusive concert here in the Amphitheater, starting at 8:30. Food and drinks will be served, with alcoholic beverages available for those 21 and over. Don't forget your ID and attendee badge.`,
          }),
        ]),
      },
      'default': {
        'firstTime/repeat': attendingReentry([
          new SimpleResponse({
            speech: `<speak> The after parties are over. I hope you were able to attend.<break time="750ms"/></speak>`,
            text: `The after parties are over. I hope you were able to attend.`,
          }),
        ]),
      },
    },
    'watchRemotely': {
      'firstTime/repeat': attendingReentry([
        new SimpleResponse({
          speech: `<speak>Developers around the world are hosting Google I/O Extended events where they livestream the event <break time="250ms"/>and host their own hackathons,<break time="250ms"/> codelabs, <break time="250ms"/>and demos. Find out more at events.google.com/IO.<break time="750ms"/></speak>`,
          text: `At Google I/O Extended events, organizers can livestream the event and host their own hackathons, codelabs, and demos. Find out more at events.google.com/io`,
        }),
      ]),
    },
    'announcements': {
      'default': {
        'firstTime/repeat': attendingReentry([
          new SimpleResponse({
            speech: `<speak> I'm not sure what will be announced, but I recommend watching the keynotes. <break time="750ms"/></speak>`,
            text: `I'm not sure what will be announced, but I recommend watching the keynotes.`,
          }),
        ]),
      },
      'afterKeynote': {
        'firstTime/repeat': attendingReentry([
          new SimpleResponse({
            speech: `<speak>If you haven't already, I recommend watching the keynotes for the biggest announcements.<break time="750ms"/></speak>`,
            text: `If you haven't already, I recommend watching the keynotes for the biggest announcements.`,
          }),
        ]),
      },
    },
    'lostAndFound': {
      'firstTime/repeat': attendingReentry([
        new SimpleResponse({
          speech: `<speak> The lost and found station is located at the Conference Help Desk during event hours. Any items left overnight will be turned over to the Conference Security Office. One important detail: Google I/O badges aren’t replaceable, so don't lose yours, or you won’t be readmitted to the conference!<break time="750ms"/></speak>`,
          text: `The lost & found station is located at the Conference Help Desk during event hours. Any items left overnight will be turned over to the Conference Security Office. One important detail: Google I/O badges aren’t replaceable, so don't lose yours, or you won’t be readmitted to the conference!`,
        }),
      ]),
    },
    'whatToWear': {
      'firstTime/repeat': attendingReentry([
        new SimpleResponse({
          speech: `<speak> Google I/O is an outdoor developer event, so I recommend something casual and comfortable. The Bay Area can be hot during the day and chilly in the evenings, so it's best to wear layers.<break time="750ms"/></speak>`,
          text: `Google I/O is an outdoor developer event, so I recommend something casual and comfortable. The Bay Area can be hot during the day and chilly in the evenings, so it's best to wear layers.`,
        }),
      ]),
    },
  },
  'notAttending': {
    'welcome': {
      'firstTime': menuFirstTime(menuPrompts.notAttending,
        [
          new SimpleResponse({
            speech: `Welcome to your launchpad for all things Google IO.`,
            text: `Welcome to your launchpad for all things Google I/O.`,
          }),
        ]),
      'repeat': menuRepeat(menuPrompts.notAttending),
    },
    'menu': {
      'firstTime/repeat': menuRepeat(menuPrompts.notAttending),
    },
    'ask-attending-no': {
      'firstTime/repeat': menuRepeat(menuPrompts.notAttending),
    },
    'thingsToDoMenu': {
      'firstTime': menuFirstTime(menuPrompts.thingsToDo),
      'repeat': menuRepeat(menuPrompts.thingsToDo),
    },
    'relaxMenu': {
      'firstTime': menuFirstTime(menuPrompts.relax),
      'repeat': menuRepeat(menuPrompts.relax),
    },
    'date': {
      'firstTime/repeat': notAttendingReentry([
        new SimpleResponse({
          speech: `<speak> This year’s developer festival will be held May <say-as interpret-as="ordinal">8</say-as> through <say-as interpret-as="ordinal">10</say-as> California <break time="250ms"/> next to Google's main campus.<break time="750ms"/></speak>`,
          text: `This year’s developer festival will be held May 8-10 at the Shoreline Amphitheatre in Mountain View, CA`,
        }),
      ]),
    },
    'keynote': {
      'before': {
        'firstTime/repeat': notAttendingReentry([
          new SimpleResponse({
            speech: `<speak>There're actually two keynotes this year. It all starts today at 10AM and 12:45PM PST. For the best seat in the house, tune into the livestream by going to events.google.com/IO.<break time="750ms"/></speak>`,
            text: `There're two keynotes this year. They're today at 10AM and 12:45PM PST. Tune into the livestream by going to events.google.com/io.`,
          }),
        ]),
      },
      'during': {
        'firstTime/repeat': notAttendingReentry([
          new SimpleResponse({
            speech: `<speak>There're actually two keynotes this year. It all starts today at 10AM and 12:45PM PST. For the best seat in the house, tune into the livestream by going to events.google.com/IO.<break time="750ms"/></speak>`,
            text: `There're two keynotes this year. They're today at 10AM and 12:45PM PST. Tune into the livestream by going to events.google.com/io.`,
          }),
        ]),
      },
      'after': {
        'firstTime/repeat': notAttendingReentry([
          new SimpleResponse({
            speech: `<speak> The keynotes were at 10AM and 12:45PM PST. The livestreams are over, but the recordings will be posted to the Google Developers YouTube channel soon.<break time="750ms"/></speak>`,
            text: `The keynotes were at 10AM and 12:45PM PST. The livestreams are over, but the recordings will be posted to the Google Developers YouTube channel soon.`,
          }),
        ]),
      },
      'default': {
        'firstTime/repeat': notAttendingReentry([
          new SimpleResponse({
            speech: `<speak> The keynotes were at 10AM and 12:45PM PST on Tuesday. Check the Google Developers YouTube channel for the recordings.<break time="750ms"/></speak>`,
            text: `The keynotes were at 10AM and 12:45PM PST on Tuesday. Check the Google Developers YouTube channel for the recordings.`,
          }),
        ]),
      },
    },
    'codelabs': {
      'firstTime/repeat': notAttendingReentry([
        new SimpleResponse({
          speech: `<speak>Codelabs and Sandboxes are all about hands-on inspiration, and demoing the latest interactive experiences built on the Google developer platform. Codelabs are free, self-paced, online modules, so you can try them yourself at codelabs.developers.google.com <break time="750ms"/></speak>`,
          text: `Codelabs and Sandboxes are all about hands-on inspiration. You can try these free, self-paced, online modules at codelabs.developers.google.com`,
        }),
      ]),
    },
    'appReview': {
      'firstTime/repeat': notAttendingReentry([
        new SimpleResponse({
          speech: `<speak> Developers attending IO can drop by office hours and app reviews to get advice and on-the-spot reviews from Googlers.<break time="750ms"/></speak>`,
          text: `Developers attending I/O can drop by office hours and app reviews to get advice and on-the-spot reviews from Googlers.`,
        }),
      ]),
    },
    'food': {
      'firstTime/repeat': notAttendingReentry([
        new SimpleResponse({
          speech: `<speak>Attendees can enjoy complimentary breakfast, lunch, and snacks during the conference. They can also grab dinner during the after parties.<break time="750ms"/></speak>`,
          text: `Attendees can enjoy complimentary breakfast, lunch, and snacks during the conference. They can also grab dinner during the after parties.`,
        }),
      ]),
    },
    'swag': {
      'firstTime/repeat': notAttendingReentry([
        new SimpleResponse({
          speech: `<speak> There are rumors of swag at IO. Some say, if you believe hard enough, it may appear. <break time="750ms"/></speak>`,
          text: `There are rumors of swag at IO. Some say, if you believe hard enough, it may appear.`,
        }),
      ]),
    },
    'afterParty': {
      'firstDay': {
        'firstTime/repeat': notAttendingReentry([
          new SimpleResponse({
            speech: `<speak>Attendees are invited to 2 nights of fun in the Amphitheatre, including an exclusive concert. Why not do the same and create your own after party? <break time="750ms"/></speak>`,
            text: `Attendees are invited to 2 nights of fun in the Amphitheatre, including an exclusive concert. Why not do the same and create your own after party?`,
          }),
        ]),
      },
      'secondDay': {
        'firstTime/repeat': notAttendingReentry([
          new SimpleResponse({
            speech: `<speak>Attendees are invited to 2 nights of fun in the Amphitheatre, including an exclusive concert. Why not do the same and create your own after party? <break time="750ms"/></speak>`,
            text: `Attendees are invited to 2 nights of fun in the Amphitheatre, including an exclusive concert. Why not do the same and create your own after party?`,
          }),
        ]),
      },
      'default': {
        'firstTime/repeat': notAttendingReentry([
          new SimpleResponse({
            speech: `<speak>Attendees are invited to 2 nights of fun in the Amphitheatre, including an exclusive concert. Why not do the same and create your own after party? <break time="750ms"/></speak>`,
            text: `Attendees are invited to 2 nights of fun in the Amphitheatre, including an exclusive concert. Why not do the same and create your own after party?`,
          }),
        ]),
      },
    },
    'watchRemotely': {
      'firstTime/repeat': notAttendingReentry([
        new SimpleResponse({
          speech: `<speak>Developers around the world are hosting Google I/O Extended events where they livestream the event <break time="250ms"/>and host their own hackathons,<break time="250ms"/> codelabs, <break time="250ms"/>and demos. Find out more at events.google.com/IO.<break time="750ms"/></speak>`,
          text: `At Google I/O Extended events, organizers can livestream the event and host their own hackathons, codelabs, and demos. Find out more at events.google.com/io`,
        }),
      ]),
    },
    'announcements': {
      'default': {
        'firstTime/repeat': notAttendingReentry([
          new SimpleResponse({
            speech: `<speak> I'm not sure what will be announced, but I recommend watching the keynotes. <break time="750ms"/></speak>`,
            text: `I'm not sure what will be announced, but I recommend watching the keynotes.`,
          }),
        ]),
      },
      'afterKeynote': {
        'firstTime/repeat': notAttendingReentry([
          new SimpleResponse({
            speech: `<speak>If you haven't already, I recommend watching the keynotes for the biggest announcements.<break time="750ms"/></speak>`,
            text: `If you haven't already, I recommend watching the keynotes for the biggest announcements.`,
          }),
        ]),
      },
    },
    'lostAndFound': {
      'firstTime/repeat': notAttendingReentry([
        new SimpleResponse({
          speech: `<speak> The lost and found station will be located at the Conference Help Desk during event hours. Any items left overnight will be turned over to the Conference Security Office. One important detail: Google I/O badges aren’t replaceable, so don't lose yours, or you won’t be readmitted to the conference!<break time="750ms"/></speak>`,
          text: `The lost & found station will be located at the Conference Help Desk during event hours. Any items left overnight will be turned over to the Conference Security Office. One important detail: Google I/O badges aren’t replaceable, so don't lose yours, or you won’t be readmitted to the conference!`,
        }),
      ]),
    },
    'whatToWear': {
      'firstTime/repeat': notAttendingReentry([
        new SimpleResponse({
          speech: `<speak> If you're not attending, why do you want to know what to wear? How about this. Just follow Google's dress code, which is. You must wear clothes.<break time="750ms"/></speak>`,
          text: `If you're not attending, why do you want to know what to wear? How about this. Just follow Google's dress code: You must wear clothes.`,
        }),
      ]),
    },
  },
};
