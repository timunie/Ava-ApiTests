# MaterialColorPalette Class


Implements a reduced version of the 2014 Material Design color palette.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class MaterialColorPalette : IColorPalette
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class MaterialColorPalette
	Implements IColorPalette
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type MaterialColorPalette = 
    class
        interface IColorPalette
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorPalettes/MaterialColorPalette.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  MaterialColorPalette</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_IColorPalette">IColorPalette</a></td></tr>
</table>

This palette is based on the one outlined here: https://material.io/design/color/the-color-system.html#tools-for-picking-colors In order to make the palette uniform and rectangular the following alterations were made: 1. The A100-A700 shades of each color are excluded. These shades do not exist for all colors (brown/gray). 2. Black/White are stand-alone and are also excluded.

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_MaterialColorPalette__ctor">MaterialColorPalette()</a></td>
<td>Initializes a new instance of the MaterialColorPalette class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_MaterialColorPalette_ColorCount">ColorCount</a></td>
<td>Gets the total number of colors in this palette. A color is not necessarily a single value and may be composed of several shades.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_MaterialColorPalette_ShadeCount">ShadeCount</a></td>
<td>Gets the total number of shades for each color in this palette. Shades are usually a variation of the color lightening or darkening it.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_MaterialColorPalette_GetColor">GetColor(Int32, Int32)</a></td>
<td>Gets a color in the palette by index.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_MaterialColorPalette_InitColorChart">InitColorChart()</a></td>
<td>Initializes all color chart colors.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

