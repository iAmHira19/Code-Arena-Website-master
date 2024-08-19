import React, { useState } from 'react'
import "flowbite";
import {Button, Modal, TextInput, Label } from "flowbite-react";
function Modale() {

    const [showModal, setShowModal] = useState(false);

    function closeModal() {
        setShowModal(false);
    }

    function activateModal() {
        setShowModal(true);
    }
  return (
   <div className="mx-2">
    <Button onClick={activateModal}>
    Login
  </Button>
  <Modal
    show={showModal}
    onClose={closeModal}
  >
    <Modal.Header>
      Login to Your Account
    </Modal.Header>
    <Modal.Body>
      <div className="space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Enter your account details to login to your account
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder=""
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      required={true}
    />
  </div>
  <Button type="submit">
    Login
  </Button>
</form>
        </p>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={closeModal}
        color="gray"
      >
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  </div>
  )
}

export default Modale;