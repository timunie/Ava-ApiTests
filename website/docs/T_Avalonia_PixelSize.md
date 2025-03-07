# PixelSize Structure


Represents a size in device pixels.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct PixelSize : IEquatable<PixelSize>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure PixelSize
	Implements IEquatable(Of PixelSize)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type PixelSize = 
    struct
        inherit ValueType
        interface IEquatable<PixelSize>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelSize.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  PixelSize</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(PixelSize)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_PixelSize__ctor">PixelSize(Int32, Int32)</a></td>
<td>Initializes a new instance of the PixelSize structure.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_PixelSize_AspectRatio">AspectRatio</a></td>
<td>Gets the aspect ratio of the size.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelSize_Height">Height</a></td>
<td>Gets the height.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelSize_Width">Width</a></td>
<td>Gets the width.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_PixelSize_Equals_1">Equals(Object)</a></td>
<td>Checks for equality between a size and an object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_Equals">Equals(PixelSize)</a></td>
<td>Returns a boolean indicating whether the size is equal to the other given size.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_FromSize">FromSize(Size, Vector)</a></td>
<td>Converts a <a href="T_Avalonia_Size">Size</a> to device pixels using the specified scaling factor.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_FromSize_1">FromSize(Size, Double)</a></td>
<td>Converts a <a href="T_Avalonia_Size">Size</a> to device pixels using the specified scaling factor.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_FromSizeWithDpi">FromSizeWithDpi(Size, Vector)</a></td>
<td>Converts a <a href="T_Avalonia_Size">Size</a> to device pixels using the specified dots per inch (DPI).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_FromSizeWithDpi_1">FromSizeWithDpi(Size, Double)</a></td>
<td>Converts a <a href="T_Avalonia_Size">Size</a> to device pixels using the specified dots per inch (DPI).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_GetHashCode">GetHashCode()</a></td>
<td>Returns a hash code for a PixelSize.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_Parse">Parse(String)</a></td>
<td>Parses a PixelSize string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_ToSize_1">ToSize(Double)</a></td>
<td>Converts the PixelSize to a device-independent <a href="T_Avalonia_Size">Size</a> using the specified scaling factor.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_ToSize">ToSize(Vector)</a></td>
<td>Converts the PixelSize to a device-independent <a href="T_Avalonia_Size">Size</a> using the specified scaling factor.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_ToSizeWithDpi_1">ToSizeWithDpi(Double)</a></td>
<td>Converts the PixelSize to a device-independent <a href="T_Avalonia_Size">Size</a> using the specified dots per inch (DPI).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_ToSizeWithDpi">ToSizeWithDpi(Vector)</a></td>
<td>Converts the PixelSize to a device-independent <a href="T_Avalonia_Size">Size</a> using the specified dots per inch (DPI).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_ToString">ToString()</a></td>
<td>Returns the string representation of the size.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_TryParse">TryParse(String, PixelSize)</a></td>
<td>Try parsing <em>source</em> as PixelSize.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_WithHeight">WithHeight(Int32)</a></td>
<td>Returns a new PixelSize with the same width and the specified height.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_WithWidth">WithWidth(Int32)</a></td>
<td>Returns a new PixelSize with the same height and the specified width.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_PixelSize_op_Equality">Equality(PixelSize, PixelSize)</a></td>
<td>Checks for equality between two PixelSizes.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelSize_op_Inequality">Inequality(PixelSize, PixelSize)</a></td>
<td>Checks for inequality between two <a href="T_Avalonia_Size">Size</a>s.</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_PixelSize_Empty">Empty</a></td>
<td>A size representing zero</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
