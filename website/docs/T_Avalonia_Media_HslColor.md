# HslColor Structure


Defines a color using the hue/saturation/lightness (HSL) model. This uses a cylindrical-coordinate representation of a color.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct HslColor : IEquatable<HslColor>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure HslColor
	Implements IEquatable(Of HslColor)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type HslColor = 
    struct
        inherit ValueType
        interface IEquatable<HslColor>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/HslColor.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  HslColor</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(HslColor)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_HslColor__ctor">HslColor(Color)</a></td>
<td>Initializes a new instance of the HslColor struct.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor__ctor_1">HslColor(Double, Double, Double, Double)</a></td>
<td>Initializes a new instance of the HslColor struct.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_HslColor_A">A</a></td>
<td>Gets the Alpha (transparency) component in the range from 0..1 (percentage).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_HslColor_H">H</a></td>
<td>Gets the Hue component in the range from 0..360 (degrees). This is the color's location, in degrees, on a color wheel/circle from 0 to 360. Note that 360 is equivalent to 0 and will be adjusted automatically.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_HslColor_L">L</a></td>
<td>Gets the Lightness component in the range from 0..1 (percentage).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_HslColor_S">S</a></td>
<td>Gets the Saturation component in the range from 0..1 (percentage).</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_HslColor_Equals">Equals(HslColor)</a></td>
<td>Indicates whether the current object is equal to another object of the same type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor_Equals_1">Equals(Object)</a></td>
<td>Indicates whether this instance and a specified object are equal.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor_FromAhsl">FromAhsl(Double, Double, Double, Double)</a></td>
<td>Creates a new HslColor from individual color component values.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor_FromHsl">FromHsl(Double, Double, Double)</a></td>
<td>Creates a new HslColor from individual color component values.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor_GetHashCode">GetHashCode()</a></td>
<td>Gets a hashcode for this object. Hashcode is not guaranteed to be unique.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor_Parse">Parse(String)</a></td>
<td>Parses an HSL color string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor_ToHsv">ToHsv()</a></td>
<td>Returns the HSV color model equivalent of this HSL color.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor_ToHsv_1">ToHsv(Double, Double, Double, Double)</a></td>
<td>Converts the given HSLA color component values to their HSV color equivalent.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor_ToRgb">ToRgb()</a></td>
<td>Returns the RGB color model equivalent of this HSL color.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor_ToRgb_1">ToRgb(Double, Double, Double, Double)</a></td>
<td>Converts the given HSLA color component values to their RGB color equivalent.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor_ToString">ToString()</a></td>
<td>Returns the fully qualified type name of this instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor_TryParse">TryParse(String, HslColor)</a></td>
<td>Parses an HSL color string.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Media_HslColor_op_Equality">Equality(HslColor, HslColor)</a></td>
<td>Indicates whether the values of two specified HslColor objects are equal.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor_op_Explicit">Explicit(HslColor to Color)</a></td>
<td>Explicit conversion from an HslColor to a <a href="T_Avalonia_Media_Color">Color</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HslColor_op_Inequality">Inequality(HslColor, HslColor)</a></td>
<td>Indicates whether the values of two specified HslColor objects are not equal.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

