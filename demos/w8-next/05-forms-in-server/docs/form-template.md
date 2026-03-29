<form action="">
        <label htmlFor="rollercoasterName">Rollercoaster Name: </label>
        <input type="text" name="rollercoasterName" required />
        <label htmlFor="height">Height: </label>
        <input type="number" name="height" min={0} required />
        <label htmlFor="country">Country: </label>
        <input type="text" name="country" required />
        <label htmlFor="url">Image link: </label>
        <input
          type="text"
          name="url"
          required
          placeholder="copy and paste a url"
        />
        <button className="bg-amber-600">Submit</button>
      </form>
