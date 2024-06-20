import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'images/gundam-life-size.jpg',
      thumbnail: 'images/gundam-life-size.jpg',
      description: `Picture of a life-size Gundam in Yokohama, Japan in April 2023.`,
      originalHeight: '450px',
    },
    {
        original: 'images/one-world-trade-center.jpg',
        thumbnail: 'images/one-world-trade-center.jpg',
        description: `Picture of the One World Trade Center in New York City in May 2023.`,
        originalHeight: '450px',
      },
    {
        original: 'images/japan-night.jpg',
        thumbnail: 'images/japan-night.jpg',
        description: `Picture of Tokyo, Japan at night in April 2023.`,
        originalHeight: '450px',
      },
    {
        original: 'images/sony-headphones.jpg',
        thumbnail: 'images/sony-headphones.jpg',
        description: `Picture of Patrick Lim's favorite pair of Sony headphones taken in October 2023.`,
        originalHeight: '450px',
      },
    {
        original: 'images/perler-character.jpg',
        thumbnail: 'images/perler-character.jpg',
        description: `Picture of a sprite based character called Selena, from Fire Emblem Fates, taken in May 2023.`,
        originalHeight: '450px',
      },
    {
        original: 'images/yu-gi-oh-structure-deck.jpg',
        thumbnail: 'images/yu-gi-oh-structure-deck.jpg',
        description: `Picture of a structure deck for the Yu-Gi-Oh! trading card game in November 2022.`,
        originalHeight: '450px',
      },
    {
        original: 'images/excel-o2-consumption.png',
        thumbnail: 'images/excel-o2-consumption.png',
        description: `Screenshot of an Excel graph about oxygen consumption created for a biology class at Northwestern University in 2017.`,
        originalHeight: '450px',
      },
    {
        original: 'images/graphpad-freeze-duration.png',
        thumbnail: 'images/graphpad-freeze-duration.png',
        description: `Screenshot of a graph about animal freeze duration for Patrick Lim's research paper in 2017.`,
        originalHeight: '450px',
      },
    {
        original: 'images/python-othello.png',
        thumbnail: 'images/python-othello.png',
        description: `Screenshot of Python code written for a portfolio project that simulates a game of Othello, created in April 2023.`,
        originalHeight: '450px',
      },
    {
        original: 'images/assembly-introduction.png',
        thumbnail: 'images/assembly-introduction.png',
        description: `Screenshot of x86 assembly code written for a project that processes 10 integers and outputs the sum and average of those values. Created in June 2023.`,
        originalHeight: '450px',
      }
    ]

    function GalleryPage() {
        return(
            <>
            <h2>Patrick Lim's React Image Gallery</h2>
            <article>
                <p>
                    <ImageGallery items={images} />
                </p>
            </article>
            </>
        )
    }
    export default GalleryPage;

