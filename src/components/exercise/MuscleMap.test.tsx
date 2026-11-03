import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MuscleMap } from './MuscleMap'

describe('MuscleMap (Real Human Model Photography & Overlays)', () => {
  const mockCounts = {
    Chest: 45,
    Biceps: 22,
    Triceps: 30,
    Quadriceps: 55,
    Hamstrings: 35,
    Glutes: 40,
    Calves: 18,
    Lats: 28,
    Traps: 15,
    Abs: 32,
    Obliques: 20,
    Forearms: 14,
  }

  it('renders default male anterior view with photograph and overlay', () => {
    const onSelect = vi.fn()
    render(
      <MuscleMap
        selectedMuscle={null}
        onSelectMuscle={onSelect}
        exerciseCounts={mockCounts}
      />,
    )

    // Image for male anterior
    const img = screen.getByRole('img', { name: /Male Anterior/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/muscle-map/male/anterior.webp')

    // Model and view controls
    expect(screen.getByRole('button', { name: 'Male' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Female' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Anterior' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Posterior' })).toBeInTheDocument()
  })

  it('allows switching between Male and Female models seamlessly', () => {
    const onSelect = vi.fn()
    render(
      <MuscleMap
        selectedMuscle={null}
        onSelectMuscle={onSelect}
        exerciseCounts={mockCounts}
      />,
    )

    // Switch to female model
    const femaleBtn = screen.getByRole('button', { name: 'Female' })
    fireEvent.click(femaleBtn)

    const img = screen.getByRole('img', { name: /Female Anterior/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/muscle-map/female/anterior.webp')

    // Switch back to male
    const maleBtn = screen.getByRole('button', { name: 'Male' })
    fireEvent.click(maleBtn)
    expect(screen.getByRole('img', { name: /Male Anterior/i })).toHaveAttribute(
      'src',
      '/muscle-map/male/anterior.webp',
    )
  })

  it('allows switching between Anterior (Front) and Posterior (Back) views', () => {
    const onSelect = vi.fn()
    render(
      <MuscleMap
        selectedMuscle={null}
        onSelectMuscle={onSelect}
        exerciseCounts={mockCounts}
      />,
    )

    // Switch to posterior
    const posteriorBtn = screen.getByRole('button', { name: 'Posterior' })
    fireEvent.click(posteriorBtn)

    const img = screen.getByRole('img', { name: /Male Posterior/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/muscle-map/male/posterior.webp')

    // In posterior view, back muscles like Traps, Lats, Glutes, Hamstrings, Triceps are present
    expect(screen.getByRole('button', { name: /Traps/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Glutes/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Hamstrings/i })).toBeInTheDocument()
  })

  it('selects muscle on click and calls onSelectMuscle', () => {
    const onSelect = vi.fn()
    render(
      <MuscleMap
        selectedMuscle={null}
        onSelectMuscle={onSelect}
        exerciseCounts={mockCounts}
      />,
    )

    const chestBtn = screen.getByRole('button', { name: /Chest: 45 exercises/i })
    fireEvent.click(chestBtn)
    expect(onSelect).toHaveBeenCalledWith('Chest')
  })

  it('deselects muscle when clicking already selected muscle', () => {
    const onSelect = vi.fn()
    render(
      <MuscleMap
        selectedMuscle="Chest"
        onSelectMuscle={onSelect}
        exerciseCounts={mockCounts}
      />,
    )

    const chestBtn = screen.getByRole('button', { name: /Chest: 45 exercises/i })
    fireEvent.click(chestBtn)
    expect(onSelect).toHaveBeenCalledWith(null)
  })

  it('displays selected muscle banner with count and mode toggle', () => {
    const onSelect = vi.fn()
    const onToggleMode = vi.fn()
    render(
      <MuscleMap
        selectedMuscle="Quadriceps"
        onSelectMuscle={onSelect}
        exerciseCounts={mockCounts}
        muscleFilterMode="primary"
        onToggleFilterMode={onToggleMode}
      />,
    )

    expect(screen.getByText('Quadriceps')).toBeInTheDocument()
    expect(screen.getByText('55 exercises')).toBeInTheDocument()

    // Mode toggle buttons
    const primaryBtn = screen.getByRole('button', { name: 'Primary' })
    const involvesBtn = screen.getByRole('button', { name: 'Involves' })
    expect(primaryBtn).toBeInTheDocument()
    expect(involvesBtn).toBeInTheDocument()

    fireEvent.click(involvesBtn)
    expect(onToggleMode).toHaveBeenCalledWith('involves')
  })

  it('notifies user if selected muscle is located on the opposite view', () => {
    const onSelect = vi.fn()
    render(
      <MuscleMap
        selectedMuscle="Glutes" // Glutes is posterior, but view defaults to front
        onSelectMuscle={onSelect}
        exerciseCounts={mockCounts}
      />,
    )

    expect(screen.getByText('Glutes')).toBeInTheDocument()
    expect(screen.getByText(/Located on Posterior view/i)).toBeInTheDocument()
  })
})
