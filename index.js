require('dotenv').config()
const fs = require('fs')
const { get, updateTemplateVersion } = require('./Request')


async function updateTemplate() {

  // We assign template_id value from our command argument
  const template_id = process.argv[2];
  // Get single template using template_id
  const template = await get(template_id)
  // Get the latest and updated version of the template
  const version = template.versions[template.versions.length - 1]

  const html_content = await getHtmlContent()
  
  // Update the template version
  const update = await updateTemplateVersion(version, html_content)

}

async function getHtmlContent() {
  return fs.readFileSync(process.env.FILE_PATH, { encoding: 'utf8', flag: 'r' });
}


updateTemplate();