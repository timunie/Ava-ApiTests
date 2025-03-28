# HsvColor Structure


Defines a color using the hue/saturation/value (HSV) model. This uses a cylindrical-coordinate representation of a color.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct HsvColor : IEquatable<HsvColor>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure HsvColor
	Implements IEquatable(Of HsvColor)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type HsvColor = 
    struct
        inherit ValueType
        interface IEquatable<HsvColor>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/HsvColor.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  HsvColor</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(HsvColor)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_HsvColor__ctor">HsvColor(Color)</a></td>
<td>Initializes a new instance of the HsvColor struct.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor__ctor_1">HsvColor(Double, Double, Double, Double)</a></td>
<td>Initializes a new instance of the HsvColor struct.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_HsvColor_A">A</a></td>
<td>Gets the Alpha (transparency) component in the range from 0..1 (percentage).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_HsvColor_H">H</a></td>
<td>Gets the Hue component in the range from 0..360 (degrees). This is the color's location, in degrees, on a color wheel/circle from 0 to 360. Note that 360 is equivalent to 0 and will be adjusted automatically.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_HsvColor_S">S</a></td>
<td>Gets the Saturation component in the range from 0..1 (percentage).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_HsvColor_V">V</a></td>
<td>Gets the Value (or Brightness/Intensity) component in the range from 0..1 (percentage).</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_Equals">Equals(HsvColor)</a></td>
<td>Indicates whether the current object is equal to another object of the same type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_Equals_1">Equals(Object)</a></td>
<td>Indicates whether this instance and a specified object are equal.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_FromAhsv">FromAhsv(Double, Double, Double, Double)</a></td>
<td>Creates a new HsvColor from individual color component values.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_FromHsv">FromHsv(Double, Double, Double)</a></td>
<td>Creates a new HsvColor from individual color component values.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_GetHashCode">GetHashCode()</a></td>
<td>Gets a hashcode for this object. Hashcode is not guaranteed to be unique.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_Parse">Parse(String)</a></td>
<td>Parses an HSV color string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_ToHsl">ToHsl()</a></td>
<td>Returns the HSL color model equivalent of this HSV color.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_ToHsl_1">ToHsl(Double, Double, Double, Double)</a></td>
<td>Converts the given HSVA color component values to their HSL color equivalent.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_ToRgb">ToRgb()</a></td>
<td>Returns the RGB color model equivalent of this HSV color.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_ToRgb_1">ToRgb(Double, Double, Double, Double)</a></td>
<td>Converts the given HSVA color component values to their RGB color equivalent.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_ToString">ToString()</a></td>
<td>Returns the fully qualified type name of this instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_TryParse">TryParse(String, HsvColor)</a></td>
<td>Parses an HSV color string.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_op_Equality">Equality(HsvColor, HsvColor)</a></td>
<td>Indicates whether the values of two specified HsvColor objects are equal.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_op_Explicit">Explicit(HsvColor to Color)</a></td>
<td>Explicit conversion from an HsvColor to a <a href="T_Avalonia_Media_Color">Color</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_HsvColor_op_Inequality">Inequality(HsvColor, HsvColor)</a></td>
<td>Indicates whether the values of two specified HsvColor objects are not equal.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

