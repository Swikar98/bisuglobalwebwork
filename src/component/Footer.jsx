import React from "react";
import { TextField } from "../component/Field";
import Button from "./Button";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-blue-600">
      <Container>
        <div className="flex flex-wrap   items-center   pb-12 pt-8 md:flex-row md:justify-between md:pt-6">
          <p className="text-s text-white">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved Bisu Global.
          </p>
          <form className="flex w-full justify-center md:w-auto mt-6 md:mt-0">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="blue" className="ml-4 flex-none">
              <span className="hidden lg:inline">Subscribe</span>
              <span className="lg:hidden">Subscribe</span>
            </Button>
          </form>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;