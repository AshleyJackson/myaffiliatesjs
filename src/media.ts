import { convertXML } from "simple-xml-to-json";
import { createClient } from "./common";
import fs from 'fs'

const axios = createClient()

type media = {
  id: number,
  media_type_id: number,
  media_type_name: string,
  title: string,
  creative: string,
  active: string,
  media_source: string,
  preview_image: string,
  description: string,
  created_on: string,
  last_accessed: string,
  properties: {
    width: number,
    height: number,
  }
  tags: {
    tag: {
      id: number,
      name: string,
      type: string,
    }
  }[]
}

export async function get_media(id: number): Promise<media> {
  const response = await axios.get(`/feeds.php?FEED_ID=20&MEDIA=${id}`)
  let output: media
  const data = convertXML(response.data)

  output = {
    id: data.media.children[0].id.content,
    media_type_id: data.media.children[1].media_type.id,
    media_type_name: data.media.children[1].media_type.name,
    title: data.media.children[2].title.content,
    creative: data.media.children[3].creative.content,
    active: data.media.children[5].active.content,
    media_source: data.media.children[6].media_source.content,
    preview_image: data.media.children[7].preview_image, // Unsure about this, example is empty.
    description: data.media.children[8].description, // Unsure about this, example is empty.
    created_on: data.media.children[9].created_on.content,
    last_accessed: data.media.children[10].last_accessed, // Unsure about this, example is empty.
    properties: {
      width: data.media.children[11].properties.children[0].property.value,
      height: data.media.children[11].properties.children[1].property.value,
    },
    tags: data.media.children[12].tag.children
  }
  return output
}
