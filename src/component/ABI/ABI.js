const ABI =[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "BugArr",
		"outputs": [
			{
				"internalType": "string",
				"name": "bug_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bug_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "priority",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "labelbugs",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Developer",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string[]",
						"name": "bugs",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "features",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "patch_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deadline",
						"type": "string"
					},
					{
						"internalType": "bytes",
						"name": "patch_file",
						"type": "bytes"
					},
					{
						"internalType": "string",
						"name": "check",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deploy",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "uploadtime",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "apprejtime",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deploytime",
						"type": "string"
					}
				],
				"internalType": "struct BugTracking.PatchReq[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "FeatureArr",
		"outputs": [
			{
				"internalType": "string",
				"name": "feat_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "feat_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "priority",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "labelfeatures",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title_b",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description_b",
				"type": "string"
			}
		],
		"name": "ReciveBugReport",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title_f",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description_f",
				"type": "string"
			}
		],
		"name": "ReciveFeatureReport",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SendBugReport",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "bug_title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bug_description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "priority",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "labelbugs",
						"type": "uint256"
					}
				],
				"internalType": "struct BugTracking.BugReport[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SendFeatureReport",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "feat_title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "feat_description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "priority",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "labelfeatures",
						"type": "uint256"
					}
				],
				"internalType": "struct BugTracking.FeatureReport[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_patch_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_time",
				"type": "string"
			}
		],
		"name": "SetDeploy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_patch_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_newdate",
				"type": "string"
			}
		],
		"name": "SetNewDeploy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_bugs",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_features",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			}
		],
		"name": "SetPatch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_patch_name",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "_file",
				"type": "bytes"
			},
			{
				"internalType": "string",
				"name": "_upt",
				"type": "string"
			}
		],
		"name": "SetPatchFile",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_patch_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_check",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_time",
				"type": "string"
			}
		],
		"name": "SetPatchcheck",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_features",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_priority",
				"type": "string[]"
			}
		],
		"name": "SetPriorityFeature",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_bugs",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_priority",
				"type": "string[]"
			}
		],
		"name": "SetPrioritybug",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "reports",
		"outputs": [
			{
				"internalType": "string",
				"name": "patch_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "deadline",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "patch_file",
				"type": "bytes"
			},
			{
				"internalType": "string",
				"name": "check",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "deploy",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "uploadtime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "apprejtime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "deploytime",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] 

export default ABI;