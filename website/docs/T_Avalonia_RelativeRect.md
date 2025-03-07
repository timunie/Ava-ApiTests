# RelativeRect Structure


Defines a rectangle that may be defined relative to a containing element.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct RelativeRect : IEquatable<RelativeRect>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure RelativeRect
	Implements IEquatable(Of RelativeRect)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type RelativeRect = 
    struct
        inherit ValueType
        interface IEquatable<RelativeRect>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/RelativeRect.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  RelativeRect</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(RelativeRect)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_RelativeRect__ctor_2">RelativeRect(Rect, RelativeUnit)</a></td>
<td>Initializes a new instance of the RelativeRect structure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeRect__ctor_3">RelativeRect(Size, RelativeUnit)</a></td>
<td>Initializes a new instance of the RelativeRect structure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeRect__ctor">RelativeRect(Point, Point, RelativeUnit)</a></td>
<td>Initializes a new instance of the RelativeRect structure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeRect__ctor_1">RelativeRect(Point, Size, RelativeUnit)</a></td>
<td>Initializes a new instance of the RelativeRect structure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeRect__ctor_4">RelativeRect(Double, Double, Double, Double, RelativeUnit)</a></td>
<td>Initializes a new instance of the RelativeRect structure.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_RelativeRect_Rect">Rect</a></td>
<td>Gets the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_RelativeRect_Unit">Unit</a></td>
<td>Gets the unit of the rectangle.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_RelativeRect_Equals_1">Equals(Object)</a></td>
<td>Checks if the RelativeRect equals another object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeRect_Equals">Equals(RelativeRect)</a></td>
<td>Checks if the RelativeRect equals another rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeRect_GetHashCode">GetHashCode()</a></td>
<td>Gets a hashcode for a RelativeRect.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeRect_Parse">Parse(String)</a></td>
<td>Parses a RelativeRect string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeRect_ToPixels">ToPixels(Rect)</a></td>
<td>Converts a RelativeRect into pixels.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeRect_ToPixels_1">ToPixels(Size)</a></td>
<td>Converts a RelativeRect into pixels.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns the fully qualified type name of this instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_RelativeRect_op_Equality">Equality(RelativeRect, RelativeRect)</a></td>
<td>Checks for equality between two RelativeRects.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeRect_op_Inequality">Inequality(RelativeRect, RelativeRect)</a></td>
<td>Checks for inequality between two RelativeRects.</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_RelativeRect_Fill">Fill</a></td>
<td>A rectangle that represents 100% of an area.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
