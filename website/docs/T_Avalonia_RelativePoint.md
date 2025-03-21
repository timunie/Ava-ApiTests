# RelativePoint Structure


Defines a point that may be defined relative to a containing element.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct RelativePoint : IEquatable<RelativePoint>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure RelativePoint
	Implements IEquatable(Of RelativePoint)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type RelativePoint = 
    struct
        inherit ValueType
        interface IEquatable<RelativePoint>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/RelativePoint.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  RelativePoint</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(RelativePoint)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_RelativePoint__ctor">RelativePoint(Point, RelativeUnit)</a></td>
<td>Initializes a new instance of the RelativePoint struct.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativePoint__ctor_1">RelativePoint(Double, Double, RelativeUnit)</a></td>
<td>Initializes a new instance of the RelativePoint struct.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_RelativePoint_Point">Point</a></td>
<td>Gets the point.</td>
</tr>
<tr>
<td><a href="P_Avalonia_RelativePoint_Unit">Unit</a></td>
<td>Gets the unit.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_RelativePoint_Equals_1">Equals(Object)</a></td>
<td>Checks if the RelativePoint equals another object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativePoint_Equals">Equals(RelativePoint)</a></td>
<td>Checks if the RelativePoint equals another point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativePoint_GetHashCode">GetHashCode()</a></td>
<td>Gets a hashcode for a RelativePoint.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativePoint_Parse">Parse(String)</a></td>
<td>Parses a RelativePoint string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativePoint_ToPixels">ToPixels(Rect)</a></td>
<td>Converts a RelativePoint into pixels.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativePoint_ToPixels_1">ToPixels(Size)</a></td>
<td>Converts a RelativePoint into pixels.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativePoint_ToString">ToString()</a></td>
<td>Returns a String representing this RelativePoint instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_RelativePoint_op_Equality">Equality(RelativePoint, RelativePoint)</a></td>
<td>Checks for equality between two RelativePoints.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativePoint_op_Inequality">Inequality(RelativePoint, RelativePoint)</a></td>
<td>Checks for inequality between two RelativePoints.</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_RelativePoint_BottomRight">BottomRight</a></td>
<td>A point at the bottom right of the containing element.</td>
</tr>
<tr>
<td><a href="F_Avalonia_RelativePoint_Center">Center</a></td>
<td>A point at the center of the containing element.</td>
</tr>
<tr>
<td><a href="F_Avalonia_RelativePoint_TopLeft">TopLeft</a></td>
<td>A point at the top left of the containing element.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

