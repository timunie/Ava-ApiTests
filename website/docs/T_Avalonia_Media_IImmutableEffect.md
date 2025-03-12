# IImmutableEffect Interface




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IImmutableEffect : IEffect, 
	IEquatable<IEffect>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IImmutableEffect
	Inherits IEffect, IEquatable(Of IEffect)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IImmutableEffect = 
    interface
        interface IEffect
        interface IEquatable<IEffect>
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_IEffect">IEffect</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(<a href="T_Avalonia_Media_IEffect">IEffect</a>)</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1.equals" target="_blank" rel="noopener noreferrer">Equals(T)</a></td>
<td>Indicates whether the current object is equal to another object of the same type.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(<a href="T_Avalonia_Media_IEffect">IEffect</a>))</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_EffectExtensions_ToImmutable">ToImmutable()</a></td>
<td>Converts a effect to an immutable effect.<br />(Defined by <a href="T_Avalonia_Media_EffectExtensions">EffectExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

