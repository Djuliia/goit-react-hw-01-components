import styled from 'styled-components';

export const Section = styled.div`
  background-color: #e7ecf2;
  border-radius: 24px;
  padding: 80px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 260px;
  padding: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`;

export const UserAvatar = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 8px;
`;

export const Username = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const StatisticList = styled.ul`
  display: flex;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const StatisticItem = styled.li`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: #f3f6f9;
  gap: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const StatNumber = styled.span`
  font-weight: bold;
  font-size: 18px;
`;
