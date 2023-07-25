import { render, screen } from '@testing-library/react';
import Footer from '../components/FooterComponent';

test('renders the icons correctly', () => {
  render(
    <Footer />
  );
  const instagramIcon = screen.getByTestId('InstagramIcon');
  expect(instagramIcon).toBeInTheDocument();

  const facebookIcon = screen.getByTestId('FacebookIcon');
  expect(facebookIcon).toBeInTheDocument();

  const twitterIcon = screen.getByTestId('TwitterIcon');
  expect(twitterIcon).toBeInTheDocument();

  const youtubeIcon = screen.getByTestId('YouTubeIcon');
  expect(youtubeIcon).toBeInTheDocument();
});

test('renders links correctly', () => {
  render(<Footer />);

  const bikeLink = screen.getByText("Bikes");
  expect(bikeLink).toBeInTheDocument();
  expect(bikeLink).toHaveAttribute("href", "/");

  const accessoriesLink = screen.getByText("Accessories");
  expect(accessoriesLink).toBeInTheDocument();
  expect(accessoriesLink).toHaveAttribute("href", "/?item=2");

  const apparelLink = screen.getByText("Apparel");
  expect(apparelLink).toBeInTheDocument();
  expect(apparelLink).toHaveAttribute("href", "/");
});
