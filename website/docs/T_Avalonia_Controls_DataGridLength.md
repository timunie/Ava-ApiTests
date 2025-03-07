# DataGridLength Structure


Represents the lengths of elements within the <a href="T_Avalonia_Controls_DataGrid">DataGrid</a> control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[TypeConverterAttribute(typeof(DataGridLengthConverter))]
public struct DataGridLength : IEquatable<DataGridLength>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<TypeConverterAttribute(GetType(DataGridLengthConverter))>
Public Structure DataGridLength
	Implements IEquatable(Of DataGridLength)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
[<TypeConverterAttribute(typeof(DataGridLengthConverter))>]
type DataGridLength = 
    struct
        inherit ValueType
        interface IEquatable<DataGridLength>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridLength.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  DataGridLength</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(DataGridLength)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_DataGridLength__ctor_2">DataGridLength(Double)</a></td>
<td>Initializes a new instance of the DataGridLength class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridLength__ctor_1">DataGridLength(Double, DataGridLengthUnitType)</a></td>
<td>Initializes to a specified value and unit.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridLength__ctor">DataGridLength(Double, DataGridLengthUnitType, Double, Double)</a></td>
<td>Initializes to a specified value and unit.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_DataGridLength_Auto">Auto</a></td>
<td>Gets a DataGridLength structure that represents the standard automatic sizing mode.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridLength_DesiredValue">DesiredValue</a></td>
<td>Returns the desired value of this instance.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridLength_DisplayValue">DisplayValue</a></td>
<td>Returns the display value of this instance.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridLength_IsAbsolute">IsAbsolute</a></td>
<td>Returns <code>true</code> if this DataGridLength instance holds an absolute (pixel) value.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridLength_IsAuto">IsAuto</a></td>
<td>Returns <code>true</code> if this DataGridLength instance is automatic (not specified).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridLength_IsSizeToCells">IsSizeToCells</a></td>
<td>Returns <code>true</code> if this instance is to size to the cells of a column or row.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridLength_IsSizeToHeader">IsSizeToHeader</a></td>
<td>Returns <code>true</code> if this instance is to size to the header of a column or row.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridLength_IsStar">IsStar</a></td>
<td>Returns <code>true</code> if this DataGridLength instance holds a weighted proportion of available space.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridLength_SizeToCells">SizeToCells</a></td>
<td>Gets a DataGridLength structure that represents the cell-based automatic sizing mode.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridLength_SizeToHeader">SizeToHeader</a></td>
<td>Gets a DataGridLength structure that represents the header-based automatic sizing mode.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridLength_UnitType">UnitType</a></td>
<td>Gets the <a href="T_Avalonia_Controls_DataGridLengthUnitType">DataGridLengthUnitType</a> that represents the current sizing mode.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_DataGridLength_Value">Value</a></td>
<td>Gets the absolute value of the DataGridLength in pixels.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_DataGridLength_Equals">Equals(DataGridLength)</a></td>
<td>Compares this instance of DataGridLength with another instance.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridLength_Equals_1">Equals(Object)</a></td>
<td>Compares this instance of DataGridLength with another object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridLength_GetHashCode">GetHashCode()</a></td>
<td>Returns a unique hash code for this DataGridLength<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns the fully qualified type name of this instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Controls_DataGridLength_op_Equality">Equality(DataGridLength, DataGridLength)</a></td>
<td>Overloaded operator, compares 2 DataGridLength's.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DataGridLength_op_Inequality">Inequality(DataGridLength, DataGridLength)</a></td>
<td>Overloaded operator, compares 2 DataGridLength's.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
