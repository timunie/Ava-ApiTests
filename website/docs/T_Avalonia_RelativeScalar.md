# RelativeScalar Structure


Defines a scalar value that may be defined relative to a containing element.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public struct RelativeScalar : IEquatable<RelativeScalar>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure RelativeScalar
	Implements IEquatable(Of RelativeScalar)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type RelativeScalar = 
    struct
        inherit ValueType
        interface IEquatable<RelativeScalar>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/RelativeScalar.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  RelativeScalar</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(RelativeScalar)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_RelativeScalar__ctor">RelativeScalar(Double, RelativeUnit)</a></td>
<td>Initializes a new instance of the RelativeScalar struct.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_RelativeScalar_Beginning">Beginning</a></td>
<td>The value at the beginning of the range</td>
</tr>
<tr>
<td><a href="P_Avalonia_RelativeScalar_End">End</a></td>
<td>The value at the end of the range</td>
</tr>
<tr>
<td><a href="P_Avalonia_RelativeScalar_Middle">Middle</a></td>
<td>The value at the middle of the range</td>
</tr>
<tr>
<td><a href="P_Avalonia_RelativeScalar_Scalar">Scalar</a></td>
<td>Gets the scalar.</td>
</tr>
<tr>
<td><a href="P_Avalonia_RelativeScalar_Unit">Unit</a></td>
<td>Gets the unit.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_RelativeScalar_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeScalar_Equals">Equals(RelativeScalar)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeScalar_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeScalar_Parse">Parse(String)</a></td>
<td>Parses a RelativeScalar string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeScalar_ToString">ToString()</a></td>
<td>Returns a String representing this RelativeScalar instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeScalar_ToValue">ToValue(Double)</a></td>
<td>Converts a RelativeScalar into a final value.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_RelativeScalar_op_Equality">Equality(RelativeScalar, RelativeScalar)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_RelativeScalar_op_Inequality">Inequality(RelativeScalar, RelativeScalar)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

