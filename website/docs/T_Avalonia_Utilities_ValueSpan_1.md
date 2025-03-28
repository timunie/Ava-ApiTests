# ValueSpan&lt;T&gt; Structure


Pairing of value and positions sharing that value.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct ValueSpan<T> : IEquatable<ValueSpan<T>>

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure ValueSpan(Of T)
	Implements IEquatable(Of ValueSpan(Of T))
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type ValueSpan<'T> = 
    struct
        inherit ValueType
        interface IEquatable<ValueSpan<'T>>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/ValueSpan.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  ValueSpan(T)</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(ValueSpan(T))</td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Utilities_ValueSpan_1__ctor">ValueSpan(T)(Int32, Int32, T)</a></td>
<td>Initializes a new instance of the ValueSpan(T) class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Utilities_ValueSpan_1_Length">Length</a></td>
<td>Get's the length of the span.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Utilities_ValueSpan_1_Start">Start</a></td>
<td>Get's the start of the span.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Utilities_ValueSpan_1_Value">Value</a></td>
<td>Get's the value of the span.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

