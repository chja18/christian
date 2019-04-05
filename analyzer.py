"""
This file is used as a module and contain the code for the analyzing
"""

import string #import the alphabet
import operator #for the sorting of dictionary

def count_lines(filename):
    """
    counting the lines in file
    """
    counter_line = 0
    with open(filename) as fh:

        fh_lines = [line.strip() for line in fh]

        for line in fh_lines:
            if line != "":
                counter_line += 1
    return counter_line

def count_words(filename):
    """
    counting the words in file
    """
    with open(filename) as fh:
        fh_word = fh.read().split()

    return len(fh_word)

def count_letters(filename):
    """
    counting all letters in file
    """
    counter_letter = 0
    with open(filename) as fh:
        fh_letter = fh.read()
        alpha_list = list(string.ascii_lowercase)

        for letter in fh_letter:
            if letter in alpha_list:
                counter_letter += 1
    return counter_letter

def count_letters_frequency(filename):
    """
    counts the most frequent letters in file
    """
    counter_letters_frequency = 0
    letter_frequency = {}
    with open(filename) as fh:
        fh_letter = fh.read()
        alpha_list = list(string.ascii_lowercase)

        for letter in fh_letter:
            if letter in alpha_list:
                if letter not in letter_frequency:
                    letter_frequency[letter] = 1
                else:
                    letter_frequency[letter] = letter_frequency[letter] + 1
    #print(letter_frequency)
    sorted_letter_frequency = sorted(letter_frequency.items(), key=operator.itemgetter(1), reverse=True)
    #print(sorted_letter_frequency)
    for letter in sorted_letter_frequency:
        counter_letters_frequency += 1
        if counter_letters_frequency < 8:
            print(letter[0] + " " + str(round((letter[1] / count_letters(filename)) * 100, 2)) + " %")

def count_words_frequency(filename):
    """
    counts the most frequent words in file
    """
    counter_words_frequency = 0
    word_frequency = {}
    with open(filename) as fh:
        fh_word = fh.read().split()
        #alpha_list = list(string.ascii_lowercase)

        for word in fh_word:
            #if word in alpha_list:
            if word not in word_frequency:
                word_frequency[word] = 1
            else:
                word_frequency[word] = word_frequency[word] + 1
    #print(word_frequency)
    sorted_word_frequency = sorted(word_frequency.items(), key=operator.itemgetter(1), reverse=True)
    #print(sorted_word_frequency)
    for word in sorted_word_frequency:
        counter_words_frequency += 1
        if counter_words_frequency < 8:
            print(word[0] + " " + str(round((word[1] / count_words(filename)) * 100, 2)) + " %")

#all_counts = {"counter_line": 0, "counter_word": 0, "counter_letter": 0, "counter_letter_frequency": 0}
