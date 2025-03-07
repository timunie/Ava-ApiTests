# RoundedRect Structure




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public struct RoundedRect
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure RoundedRect
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type RoundedRect = 
    struct
        inherit ValueType
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/RoundedRect.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  RoundedRect</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_RoundedRect__ctor_5">RoundedRect(Rect)</a></td>
<td>Initializes a new instance of the RoundedRect class</td>
</tr>
<tr>
<td><a href="M_Avalonia_RoundedRect__ctor_1">RoundedRect(Rect, Vector)</a></td>
<td>Initializes a new instance of the RoundedRect class</td>
</tr>
<tr>
<td><a href="M_Avalonia_RoundedRect__ctor_4">RoundedRect(Rect, Double)</a></td>
<td>Initializes a new instance of the RoundedRect class</td>
</tr>
<tr>
<td><a href="M_Avalonia_RoundedRect__ctor_6">RoundedRect(Rect, CornerRadius)</a></td>
<td>Initializes a new instance of the RoundedRect class</td>
</tr>
<tr>
<td><a href="M_Avalonia_RoundedRect__ctor_3">RoundedRect(Rect, Double, Double)</a></td>
<td>Initializes a new instance of the RoundedRect class</td>
</tr>
<tr>
<td><a href="M_Avalonia_RoundedRect__ctor">RoundedRect(Rect, Vector, Vector, Vector, Vector)</a></td>
<td>Initializes a new instance of the RoundedRect class</td>
</tr>
<tr>
<td><a href="M_Avalonia_RoundedRect__ctor_2">RoundedRect(Rect, Double, Double, Double, Double)</a></td>
<td>Initializes a new instance of the RoundedRect class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_RoundedRect_IsRounded">IsRounded</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_RoundedRect_IsUniform">IsUniform</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_RoundedRect_RadiiBottomLeft">RadiiBottomLeft</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_RoundedRect_RadiiBottomRight">RadiiBottomRight</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_RoundedRect_RadiiTopLeft">RadiiTopLeft</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_RoundedRect_RadiiTopRight">RadiiTopRight</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_RoundedRect_Rect">Rect</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_RoundedRect_ContainsExclusive">ContainsExclusive(Point)</a></td>
<td>Determines whether a point is in the bounds of the rounded rectangle, exclusive of the rounded rectangle's bottom/right edge.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RoundedRect_Deflate">Deflate(Double, Double)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_RoundedRect_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_RoundedRect_Equals">Equals(RoundedRect)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_RoundedRect_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_RoundedRect_Inflate">Inflate(Double, Double)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns the fully qualified type name of this instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_RoundedRect_op_Equality">Equality(RoundedRect, RoundedRect)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_RoundedRect_op_Implicit">Implicit(Rect to RoundedRect)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_RoundedRect_op_Inequality">Inequality(RoundedRect, RoundedRect)</a></td>
<td> </td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Skia_SkiaSharpExtensions_ToSKRoundRect">ToSKRoundRect()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Skia_SkiaSharpExtensions">SkiaSharpExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
