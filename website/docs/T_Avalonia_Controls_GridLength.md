# GridLength Structure


Holds the width or height of a <a href="T_Avalonia_Controls_Grid">Grid</a>'s column and row definitions.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public struct GridLength : IEquatable<GridLength>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure GridLength
	Implements IEquatable(Of GridLength)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type GridLength = 
    struct
        inherit ValueType
        interface IEquatable<GridLength>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/GridLength.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  GridLength</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(GridLength)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_GridLength__ctor_1">GridLength(Double)</a></td>
<td>Initializes a new instance of the GridLength struct.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_GridLength__ctor">GridLength(Double, GridUnitType)</a></td>
<td>Initializes a new instance of the GridLength struct.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_GridLength_Auto">Auto</a></td>
<td>Gets an instance of GridLength that indicates that a row or column should auto-size to fit its content.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_GridLength_GridUnitType">GridUnitType</a></td>
<td>Gets the unit of the GridLength.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_GridLength_IsAbsolute">IsAbsolute</a></td>
<td>Gets a value that indicates whether the GridLength has a <a href="P_Avalonia_Controls_GridLength_GridUnitType">GridUnitType</a> of Pixel.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_GridLength_IsAuto">IsAuto</a></td>
<td>Gets a value that indicates whether the GridLength has a <a href="P_Avalonia_Controls_GridLength_GridUnitType">GridUnitType</a> of Auto.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_GridLength_IsStar">IsStar</a></td>
<td>Gets a value that indicates whether the GridLength has a <a href="P_Avalonia_Controls_GridLength_GridUnitType">GridUnitType</a> of Star.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_GridLength_Star">Star</a></td>
<td>Gets an instance of GridLength that indicates that a row or column should fill its content.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_GridLength_Value">Value</a></td>
<td>Gets the length.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_GridLength_Equals">Equals(GridLength)</a></td>
<td>Compares two GridLength structures for equality.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_GridLength_Equals_1">Equals(Object)</a></td>
<td>Determines whether the GridLength is equal to the specified object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_GridLength_GetHashCode">GetHashCode()</a></td>
<td>Gets a hash code for the GridLength.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_GridLength_Parse">Parse(String)</a></td>
<td>Parses a string to return a GridLength.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_GridLength_ParseLengths">ParseLengths(String)</a></td>
<td>Parses a string to return a collection of GridLengths.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_GridLength_ToString">ToString()</a></td>
<td>Gets a string representation of the GridLength.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Controls_GridLength_op_Equality">Equality(GridLength, GridLength)</a></td>
<td>Compares two GridLength structures for equality.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_GridLength_op_Inequality">Inequality(GridLength, GridLength)</a></td>
<td>Compares two GridLength structures for inequality.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
