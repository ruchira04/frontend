var dat = {
  'wc.searchconnection': {
    numCols: 12 / 3,
    url: '/wcms-connection/connection/_search',
    tenantIdRequired: true,
    useTimestamp: true,
    objectName: 'Connection',
    groups: [
      {
        label: 'wc.search.searchnewconnection.title',
        name: 'createCategoryType',
        fields: [
          {
            name: 'AcknowledgementNumber',
            jsonPath: 'acknowledgementNumber',
            label: 'wc.create.groups.applicantDetails.acknowledgementNumber',
            pattern: '^[s.]*([^s.][s.]*){0,20}$',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'ConsumerNumber',
            jsonPath: 'consumerNumber',
            label: 'wc.create.groups.applicantDetails.consumerNumber',
            pattern: '^[s.]*([^s.][s.]*){0,16}$',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'ManualConsumerNumber',
            jsonPath: 'manualConsumerNumber',
            label: 'wc.create.groups.applicantDetails.manualConsumerNo',
            pattern: '^[s.]*([^s.][s.]*){0,16}$',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'OldConsumerNumber',
            jsonPath: 'legacyConsumerNumber',
            label: 'wc.create.groups.applicantDetails.consumerNo',
            pattern: '^[s.]*([^s.][s.]*){0,16}$',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Name',
            jsonPath: 'name',
            label: 'reports.wcms.consumername',
            pattern: '^([a-zA-Z0-9_-\\s]){0,40}$',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'MobileNumber',
            jsonPath: 'mobileNumber',
            label: 'wc.create.groups.applicantDetails.mobileNumber',
            pattern: '',
            type: 'mobileNumber',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Locality',
            jsonPath: 'locality',
            label: 'wc.create.groups.applicantDetails.locality',
            pattern: '',
            type: 'singleValueList',
            url:
              '/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=LOCALITY&hierarchyTypeName=LOCATION|$.Boundary.*.id|$.Boundary.*.name',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'RevenueWard',
            jsonPath: 'revenueWard',
            label: 'wc.create.groups.fields.ward',
            pattern: '',
            type: 'singleValueList',
            url:
              '/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=WARD&hierarchyTypeName=ADMINISTRATION|$.Boundary.*.id|$.Boundary.*.name',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'AadharNumber',
            jsonPath: 'aadhaarNumber',
            label: 'wc.create.groups.applicantDetails.adharNumber',
            pattern: '',
            type: 'aadhar',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
        ],
      },
    ],
  },
};

export default dat;