exports.getAll = async (client) => {
    const request = {
        url: `/v3/templates`,
        method: 'GET',
    }

    try {
        const response = await client.request(request)
        console.log(response.statusCode, JSON.stringify(response.body));
        return response.body
    } catch (error) {
        console.error(error);
        console.error(error.response.body);
    };
}

exports.get = async (client, template_id) => {
    const request = {
        url: `/v3/templates/${template_id}`,
        method: 'GET',
    }

    try {
        const response = await client.request(request)
        return response[0].body
    } catch (error) {
        console.error(error);
        console.error(error.response.body);
    };
}

exports.getTemplateVersion = async (client, template_id, version_id) => {
    const request = {
        url: `/v3/templates/${template_id}/versions/${version_id}`,
        method: 'GET',
    }

    try {
        const response = await client.request(request)
        console.log(response.statusCode, JSON.stringify(response.body));
        return response.body
    } catch (error) {
        console.error(error);
        console.error(error.response.body);
    };
}

exports.editTemplateVersion = async (client, version) => {

    const { template_id, id } = version;

    delete version.id;
    delete version.editor;

    const request = {
        url: `/v3/templates/${template_id}/versions/${id}`,
        method: 'PATCH',
        body: version
    }

    try {
        const response = await client.request(request)
        return response.body
    } catch (error) {
        console.error(error);
        console.error(error.response.body);
    };
}