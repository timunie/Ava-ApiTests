# IterationCount Structure


Determines the number of iterations of an animation. Also defines its repeat behavior.



## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[TypeConverterAttribute(typeof(IterationCountTypeConverter))]
public struct IterationCount : IEquatable<IterationCount>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<TypeConverterAttribute(GetType(IterationCountTypeConverter))>
Public Structure IterationCount
	Implements IEquatable(Of IterationCount)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
[<TypeConverterAttribute(typeof(IterationCountTypeConverter))>]
type IterationCount = 
    struct
        inherit ValueType
        interface IEquatable<IterationCount>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Animation/IterationCount.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  IterationCount</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(IterationCount)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Animation_IterationCount__ctor_1">IterationCount(UInt64)</a></td>
<td>Initializes a new instance of the IterationCount struct.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Animation_IterationCount__ctor">IterationCount(UInt64, IterationType)</a></td>
<td>Initializes a new instance of the IterationCount struct.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Animation_IterationCount_Infinite">Infinite</a></td>
<td>Gets an instance of IterationCount that indicates that an animation should repeat forever.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Animation_IterationCount_IsInfinite">IsInfinite</a></td>
<td>Gets a value that indicates whether the IterationCount is set to Infinite.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Animation_IterationCount_RepeatType">RepeatType</a></td>
<td>Gets the unit of the IterationCount.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Animation_IterationCount_Value">Value</a></td>
<td>Gets the number of repeat iterations.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Animation_IterationCount_Equals">Equals(IterationCount)</a></td>
<td>Compares two IterationCount structures for equality.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Animation_IterationCount_Equals_1">Equals(Object)</a></td>
<td>Determines whether the IterationCount is equal to the specified object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Animation_IterationCount_GetHashCode">GetHashCode()</a></td>
<td>Gets a hash code for the IterationCount.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Animation_IterationCount_Parse">Parse(String)</a></td>
<td>Parses a string to return a IterationCount.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Animation_IterationCount_ToString">ToString()</a></td>
<td>Gets a string representation of the IterationCount.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Animation_IterationCount_op_Equality">Equality(IterationCount, IterationCount)</a></td>
<td>Compares two IterationCount structures for equality.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Animation_IterationCount_op_Inequality">Inequality(IterationCount, IterationCount)</a></td>
<td>Compares two IterationCount structures for inequality.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  
