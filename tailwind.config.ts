import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					emerald: 'hsl(var(--accent-emerald))',
					'emerald-light': 'hsl(var(--accent-emerald-light))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotateX(0deg)'
					},
					'50%': {
						transform: 'translateY(-10px) rotateX(2deg)'
					}
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)'
					},
					'33%': {
						transform: 'translateY(-8px) rotateX(1deg) rotateY(1deg)'
					},
					'66%': {
						transform: 'translateY(-4px) rotateX(-1deg) rotateY(-1deg)'
					}
				},
				'float-delayed': {
					'0%, 100%': {
						transform: 'translateY(0px) rotateZ(0deg)'
					},
					'50%': {
						transform: 'translateY(-12px) rotateZ(1deg)'
					}
				},
				'levitate': {
					'0%, 100%': {
						transform: 'translateY(0px) perspective(1000px) rotateX(0deg)'
					},
					'50%': {
						transform: 'translateY(-15px) perspective(1000px) rotateX(5deg)'
					}
				},
				'popup': {
					'0%': {
						transform: 'scale(0.8) translateY(20px)',
						opacity: '0',
						filter: 'blur(5px)'
					},
					'100%': {
						transform: 'scale(1) translateY(0)',
						opacity: '1',
						filter: 'blur(0px)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 40px hsl(var(--primary) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 80px hsl(var(--primary) / 0.6)'
					}
				},
				'glow-accent-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 30px hsl(var(--accent) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 60px hsl(var(--accent) / 0.6)'
					}
				},
				'disco-lights': {
					'0%': {
						boxShadow: '0 0 20px hsl(var(--disco-red) / 0.7), 0 0 40px hsl(var(--disco-red) / 0.4)'
					},
					'14%': {
						boxShadow: '0 0 20px hsl(var(--disco-orange) / 0.7), 0 0 40px hsl(var(--disco-orange) / 0.4)'
					},
					'28%': {
						boxShadow: '0 0 20px hsl(var(--disco-yellow) / 0.7), 0 0 40px hsl(var(--disco-yellow) / 0.4)'
					},
					'42%': {
						boxShadow: '0 0 20px hsl(var(--disco-green) / 0.7), 0 0 40px hsl(var(--disco-green) / 0.4)'
					},
					'56%': {
						boxShadow: '0 0 20px hsl(var(--disco-cyan) / 0.7), 0 0 40px hsl(var(--disco-cyan) / 0.4)'
					},
					'70%': {
						boxShadow: '0 0 20px hsl(var(--disco-blue) / 0.7), 0 0 40px hsl(var(--disco-blue) / 0.4)'
					},
					'84%': {
						boxShadow: '0 0 20px hsl(var(--disco-purple) / 0.7), 0 0 40px hsl(var(--disco-purple) / 0.4)'
					},
					'100%': {
						boxShadow: '0 0 20px hsl(var(--disco-pink) / 0.7), 0 0 40px hsl(var(--disco-pink) / 0.4)'
					}
				},
				'disco-bg': {
					'0%': {
						backgroundColor: 'hsl(var(--disco-red) / 0.1)',
						borderColor: 'hsl(var(--disco-red) / 0.3)'
					},
					'14%': {
						backgroundColor: 'hsl(var(--disco-orange) / 0.1)',
						borderColor: 'hsl(var(--disco-orange) / 0.3)'
					},
					'28%': {
						backgroundColor: 'hsl(var(--disco-yellow) / 0.1)',
						borderColor: 'hsl(var(--disco-yellow) / 0.3)'
					},
					'42%': {
						backgroundColor: 'hsl(var(--disco-green) / 0.1)',
						borderColor: 'hsl(var(--disco-green) / 0.3)'
					},
					'56%': {
						backgroundColor: 'hsl(var(--disco-cyan) / 0.1)',
						borderColor: 'hsl(var(--disco-cyan) / 0.3)'
					},
					'70%': {
						backgroundColor: 'hsl(var(--disco-blue) / 0.1)',
						borderColor: 'hsl(var(--disco-blue) / 0.3)'
					},
					'84%': {
						backgroundColor: 'hsl(var(--disco-purple) / 0.1)',
						borderColor: 'hsl(var(--disco-purple) / 0.3)'
					},
					'100%': {
						backgroundColor: 'hsl(var(--disco-pink) / 0.1)',
						borderColor: 'hsl(var(--disco-pink) / 0.3)'
					}
				},
				'sparkle': {
					'0%, 100%': {
						opacity: '0',
						transform: 'scale(0) rotate(0deg)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1) rotate(180deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'float-slow': 'float-slow 4s ease-in-out infinite',
				'float-delayed': 'float-delayed 3.5s ease-in-out infinite',
				'levitate': 'levitate 2.8s ease-in-out infinite',
				'popup': 'popup 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'glow-accent-pulse': 'glow-accent-pulse 2.5s ease-in-out infinite',
				'disco-lights': 'disco-lights 2s ease-in-out infinite',
				'disco-bg': 'disco-bg 2s ease-in-out infinite',
				'sparkle': 'sparkle 1.5s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-subtle': 'var(--gradient-subtle)'
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)',
				'3d': 'var(--shadow-3d)',
				'float': 'var(--shadow-float)',
				'float-hover': 'var(--shadow-float-hover)',
				'popup': 'var(--shadow-popup)',
				'glow-intense': 'var(--shadow-glow-intense)',
				'glow-accent': 'var(--shadow-glow-accent)',
				'inset': 'var(--shadow-inset)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
