import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PdfrenderApi implements ICredentialType {
	name = 'pdfrenderApi';

	displayName = 'Pdfrender API';

	icon: Icon = { light: 'file:../icons/pdfrender.svg', dark: 'file:../icons/pdfrender.svg' };

	documentationUrl = 'https://pdfrender.dev/go/n8n?to=/app/api-keys';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Create a key at https://pdfrender.dev/go/n8n?to=/app/api-keys',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-Key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.pdfrender.dev',
			url: '/v1/me',
			method: 'GET',
		},
	};
}
