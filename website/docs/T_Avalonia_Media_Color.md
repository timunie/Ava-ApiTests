# Color Structure


An ARGB color.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct Color : IEquatable<Color>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure Color
	Implements IEquatable(Of Color)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type Color = 
    struct
        inherit ValueType
        interface IEquatable<Color>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Color.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Color</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Color)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_Color__ctor">Color(Byte, Byte, Byte, Byte)</a></td>
<td>Initializes a new instance of the Color struct.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Color_A">A</a></td>
<td>Gets the Alpha component of the color.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Color_B">B</a></td>
<td>Gets the Blue component of the color.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Color_G">G</a></td>
<td>Gets the Green component of the color.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Color_R">R</a></td>
<td>Gets the Red component of the color.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_Color_Equals">Equals(Color)</a></td>
<td>Indicates whether the current object is equal to another object of the same type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_Equals_1">Equals(Object)</a></td>
<td>Indicates whether this instance and a specified object are equal.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_FromArgb">FromArgb(Byte, Byte, Byte, Byte)</a></td>
<td>Creates a Color from alpha, red, green and blue components.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_FromRgb">FromRgb(Byte, Byte, Byte)</a></td>
<td>Creates a Color from red, green and blue components.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_FromUInt32">FromUInt32(UInt32)</a></td>
<td>Creates a Color from an integer.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_GetHashCode">GetHashCode()</a></td>
<td>Returns the hash code for this instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_Parse">Parse(ReadOnlySpan(Char))</a></td>
<td>Parses a color string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_Parse_1">Parse(String)</a></td>
<td>Parses a color string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_ToHsl">ToHsl()</a></td>
<td>Returns the HSL color model equivalent of this RGB color.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_ToHsl_1">ToHsl(Byte, Byte, Byte, Byte)</a></td>
<td>Converts the given RGBA color component values to their HSL color equivalent.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_ToHsv">ToHsv()</a></td>
<td>Returns the HSV color model equivalent of this RGB color.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_ToHsv_1">ToHsv(Byte, Byte, Byte, Byte)</a></td>
<td>Converts the given RGBA color component values to their HSV color equivalent.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_ToString">ToString()</a></td>
<td>Returns the string representation of the color.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_ToUInt32">ToUInt32()</a></td>
<td>Returns the integer representation of the color.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_TryParse">TryParse(ReadOnlySpan(Char), Color)</a></td>
<td>Parses a color string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_TryParse_1">TryParse(String, Color)</a></td>
<td>Parses a color string.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Media_Color_op_Equality">Equality(Color, Color)</a></td>
<td>Indicates whether the values of two specified Color objects are equal.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Color_op_Inequality">Inequality(Color, Color)</a></td>
<td>Indicates whether the values of two specified Color objects are not equal.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Skia_SkiaSharpExtensions_ToSKColor">ToSKColor()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Skia_SkiaSharpExtensions">SkiaSharpExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

