import React from "react";
import { List as StyledList, FlexBox, ImageContainer, Image } from "../styles";
import Title from "../Title/Title";
import Description from "../Description/Description";
import Others from "../Others/Others";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const List = ({ isLoading, isError, error, data }) => {
  return (
    <>
      <StyledList>
        {isLoading ? (
          <Loading className="block" />
        ) : isError ? (
          <Error />
        ) : (
          <>
            {data.items.map((repo) => (
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
            ))}
          </>
        )}
      </StyledList>
    </>
  );
};

export default List;
