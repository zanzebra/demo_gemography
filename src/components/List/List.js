import React, { useEffect } from "react";
import { List as StyledList, FlexBox, ImageContainer, Image } from "../styles";
import Title from "../Title/Title";
import Description from "../Description/Description";
import Others from "../Others/Others";
import { useQuery } from "react-query";
import axios from "axios";

const List = () => {
  function useRepos() {
    return useQuery("repos", async () => {
      const { data } = await axios.get(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`
      );
      return data;
    });
  }
  const { data, status } = useRepos();
  console.log(data);
  return (
    <StyledList>
      {data &&
        data.items.map((repo) => {
          return (
            <FlexBox flexDirection="row">
              <FlexBox flexBasis="27%">
                <ImageContainer>
                  <Image src={repo.owner.avatar_url} alt="" />
                </ImageContainer>
              </FlexBox>
              <FlexBox
                flexBasis="70%"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <FlexBox>
                  <Title title={repo.name} />
                </FlexBox>
                <FlexBox>
                  <Description des={repo.description} />
                </FlexBox>
                <FlexBox>
                  <Others
                    stars={repo.stargazers_count}
                    issues={repo.open_issues}
                    time={repo.created_at}
                  />
                </FlexBox>
              </FlexBox>
            </FlexBox>
          );
        })}
    </StyledList>
  );
};

export default List;
