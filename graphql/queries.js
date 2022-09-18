import { gql } from "@apollo/client";

const getAllSlugs = gql`
  query {
    blogPosts {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;

const getAllPosts = gql`
  query {
    blogPosts {
      data {
        attributes {
          title
          description
          urlSlug
        }
      }
    }
  }
`;

const getIndividualPost = gql`
  query ($slugUrl: String!) {
    blogPosts(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          content
        }
      }
    }
  }
`;

export { getAllPosts, getIndividualPost, getAllSlugs };
