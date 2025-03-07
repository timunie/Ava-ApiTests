# IColorPalette Interface


Interface to define a color palette.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IColorPalette
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IColorPalette
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IColorPalette = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorPalettes/IColorPalette.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_IColorPalette_ColorCount">ColorCount</a></td>
<td>Gets the total number of colors in this palette. A color is not necessarily a single value and may be composed of several shades.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_IColorPalette_ShadeCount">ShadeCount</a></td>
<td>Gets the total number of shades for each color in this palette. Shades are usually a variation of the color lightening or darkening it.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_IColorPalette_GetColor">GetColor(Int32, Int32)</a></td>
<td>Gets a color in the palette by index.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
