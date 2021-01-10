/*
 * @file: constants.js
 * @description: It Contain action types Related Action.
 * @author: Dixit
 */

/************ User *************/
export const public_type = "public";
export const private_type = "private";
export const pagination = {
  page: 1,
  limit: 10,
  maxlimit: 10000
};

export const sorting = {
  sortkey: 'createdAt',
  sortby: -1
};

export const DummyUserImage = require("../images/avatars/0.jpg");

export const modules = [
  {
    title: "Dashboard",
    to: "/dashboard"
  },
  {
    title: "Manage Groups",
    to: "/group-list"
  },
  {
    title: "Manage Client",
    to: "/client-list",
  },
  {
    title: "Manage Group Types",
    to: "/group-type-list"
  },
  {
    title: "Manage User Type",
    to: "/user-type-list"
  },
  {
    title: "ICD Management",
    to: "/icd"
  },
  {
    title: "Questionnaire Creater",
    to: "/coming-soon2"
  },
  {
    title: "Algorithm Creater",
    to: "/coming-soon3"
  },
  {
    title: "Event Engine",
    to: "/coming-soon4"
  },
  {
    title: "Engagement Tools",
    to: "/coming-soon5"
  },
  {
    title: "Locations",
    to: "/coming-soon6"
  },
  {
    title: "Education Program",
    to: "/coming-soon7"
  },
  {
    title: "CMS",
    to: "/coming-soon8"
  },
  {
    title: "Communication",
    to: "/communication"
  },
  {
    title: "TableComponent",
    to: "/TableComponent"
  }


]

export const GroupAdminRoutes = {
  '#50:4': 'Manage Master Module',
  '#50:5': 'Manage Client',
  '#51:4': 'Manage Groups',
  '#51:5': 'Manage User Type',
  '#52:4': 'Manage Group Types',
  '#52:5': 'ICD',
  '#53:4': 'Manage View',
  '#53:10': 'Survey Category',
  '#50:11': 'Questionnaire',
  '#50:12': 'Education Program',
  '#53:11': 'Manage Diseases',
  '#52:11': 'Manage Staff'
}

// GENDER LISTS
export const QuestionsFor = [
  { name: 'Male', '@rid': '1' },
  { name: 'Female', '@rid': '2' },
  { name: 'Both', '@rid': '3' },
]

// answer Type LISTS
export const AnswerTypes = [
  { name: 'Textbox', '@rid': '1' },
  { name: 'Checkbox', '@rid': '2' },
  { name: 'Radio', '@rid': '3' },
  { name: 'Dropdown', '@rid': '4' },
  { name: 'Date', '@rid': '5' },
  { name: 'Number', '@rid': '6' }
]

// Points
export const Points = [
  { name: '0', '@rid': '0' },
  { name: '1', '@rid': '1' },
  { name: '2', '@rid': '2' },
  { name: '3', '@rid': '3' },
  { name: '4', '@rid': '4' },
  { name: '5', '@rid': '5' },
  { name: '6', '@rid': '6' },
  { name: '7', '@rid': '7' },
  { name: '8', '@rid': '8' },
  { name: '9', '@rid': '9' },
  { name: '10', '@rid': '10' }
]


// Completion Flags
export const CompletionFlags = [
  { name: 'Daily', '@rid': '0' },
  { name: 'Weekly', '@rid': '1' },
  { name: 'Monthly', '@rid': '2' },
  { name: 'Quarterly', '@rid': '3' },
  { name: '6 Monthly', '@rid': '4' },
  { name: 'Annually', '@rid': '5' },
  { name: 'Open', '@rid': '6' }
]

// Icon Type
export const IconType = {
  'video': 'play_circle_filled',
  'contentPage': 'description',
  'reward': 'emoji_events',
  'questionnaire': 'help'
}

export const Assets = [
  { name: 'Video', '@rid': '0' },
  { name: 'PDF', '@rid': '1' },
  { name: 'Content Page', '@rid': '2' }
]

export const GROUP_TYPE_FIELDS = [
  { key: 'name', label: 'Name' },
  { key: 'createdAt', label: 'Created On' }
];
export const USER_TYPE_FIELDS = [
  { key: 'name', label: 'Name' },
  { key: 'createdAt', label: 'Created On' }
];
export const GROUP_FIELDS = [
  { key: 'groupName', label: 'Group Name' },
  { key: 'groupContactName', label: 'Contact Name' },
  { key: 'groupContactPhone', label: 'Contact Phone' },
  { key: 'groupContactEmail', label: 'Contact Email Address' },
  { key: 'createdAt', label: 'Created On' }
];
export const ICD_FIELDS = [
  { key: 'category_name', label: 'ICD Category' },
  { key: 'icd9_code', label: 'ICD9' },
  { key: 'icd10_code', label: 'ICD10' },
  { key: 'description', label: 'Description' },
  { key: 'createdAt', label: 'Created On' }
];
export const GROUP_SAC_FIELDS = {
  "eL3LYNzKeLqc3qD83": "Clinician",
  "JXXjWmyE7RqXt9EqC": "Front Desk",
  "5D7zHkvy9wiNX6w2B": "Group Admin",
  "mSz44BAjbDuRBJGCk": "Patient"
};
export const CLIENT_FIELDS = [
  // Primary Contact:
  { key: 'contactName', label: 'Client Name' },
  { key: 'contactEmail', label: 'Client Email' },
  { key: 'contactPhone', label: ' Phone' },
  { key: 'fullname', label: 'Fullname  ' },
  { key: 'position', label: 'Position' },
  { key: 'createdOn', label: 'Created On' }
]
export const  STAFF_FIELDS = [
  // Primary Contact:
  { key: 'firstname', label: 'Full Name' },
  { key: 'email', label: ' Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'usertype', label: 'User Type' },
  { key: 'createdOn', label: 'Created On  ' },
  // { key: 'phone', label: ' Phone' },
  // { key: 'email', label: ' Email' },
  // { key: 'address', label: 'Addresss Line 1' },
  // { key: 'addressLine2', label: 'Addresss Line 2' },
  // { key: 'addressLine2', label: 'Address Line 3' },
  // { key: 'city', label: 'City' },
  // { key: 'state', label: 'State' },
  // { key: 'zipcode', label: 'Zip Code' },
]
export const MasterModule_FIELDS = [
  { key: 'moduleName', label: 'Name' },
  // { key: 'description', label: 'Description' },
  { key: 'createdAt', label: 'Created On' }
]
export const MANAGE_VIEW_FIELDS = [
  { key: 'name', label: 'Name' },
  { key: 'createdAt', label: 'Created On' }
]
export const ICD_CATEGORIESS_FIELDS = [
  { key: 'category_name', label: 'Category Name' },
  // { key: 'parentCategory', label: 'Parent Category' },
  { key: 'createdon', label: 'Created On' }
]
export const QUESTION_CATEGORIESS_LIST_FIELDS = [
  { key: 'categoryName', label: 'Category Name' },
  { key: 'parentCategoryName', label: 'Parent Category', isSort: true },
  // { key: 'colour', label: 'Colour' },
  { key: 'createdAt', label: 'Created On' }
]
export const MANAGE_DISEASES_LIST_FIELDS = [
  { key: 'name', label: 'Disease' },
  { key: 'parent', label: 'Parent', isSort: true },
  { key: 'lang', label: 'Language', isSort: true },
  { key: 'createdAt', label: 'Created On' }
]
export const MANAGE_SURVEY_LIST_FIELD = [
  { key: 'categoryName', label: 'Category Name' },
  { key: 'parentCategoryName', label: 'Parent Category', isSort: true },
  // { key: 'colour', label: 'Colour' },
  { key: 'createdAt', label: 'Created On' }
]
export const QUESTION_LIST_FIELD = [
  { key: 'question', label: 'Question' },
  { key: 'categoryName', label: 'Category', isSort: true },
  { key: 'createdAt', label: 'Created On' }
]
export const QUESTIONNAIRE_LIST_FIELD = [
  { key: 'name', label: 'Name' },
  { key: 'createdAt', label: 'Created On' }
]
export const PROGRAM_TYPE_LIST_FIELD = [
  { key: 'name', label: 'Program Type' },
  { key: 'createdAt', label: 'Created On' }
]
export const KNOWLEDGE_CATEGORY_LIST_FIELD = [
  { key: 'name', label: 'Category' },
  { key: 'parent', label: 'Parent Category', isSort: true },
  { key: 'createdAt', label: 'Created On' }
]
export const KNOWLEDGE_LIST_FIELD = [
  { key: 'categoryName', label: 'Category Name' },
  { key: 'parentCategoryName', label: 'Parent Category', isSort: true },
  { key: 'createdAt', label: 'Created On' }
]
export const PROGRAM_LIST_FIELD = [
  { key: 'name', label: 'Program Name' },
  { key: 'createdAt', label: 'Created On' }
]
export const LESSON_LIST_FIELD = [
  { key: 'name', label: 'lesson Name' },
  { key: 'assignedQuestionnaire', label: 'Assigned Questionnaire', isSort: true }
]
export const ASSIGNED_QUESTIONNAIRE_LIST_FIELD = [
  { key: 'questionnaireName', label: 'Questionnaire', isSort: true },
  { key: 'lessonName', label: 'Lesson Name', isSort: true }
]
export const EMAIL_TYPE_LIST_FIELD = [
  { key: 'name', label: 'Email Type' },
  { key: 'createdAt', label: 'Created On' }
]
export const EMAIL_TEMPLATE_LIST_FIELD = [
  { key: 'name', label: 'Template' },
  { key: 'email_type_name', label: 'Type' },
  { key: 'createdAt', label: 'Created On' }
]









