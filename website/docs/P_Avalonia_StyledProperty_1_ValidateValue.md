# ValidateValue Property


A method which returns "false" for values that are never valid for this property.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Func<TValue, bool>? ValidateValue { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property ValidateValue As Func(Of TValue, Boolean)
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ValidateValue : Func<'TValue, bool> with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledProperty.cs#L57" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_StyledProperty_1">TValue</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)

## See Also


#### Reference
<a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

