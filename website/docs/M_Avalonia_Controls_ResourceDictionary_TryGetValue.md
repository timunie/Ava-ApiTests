# TryGetValue Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryGetValue(
	Object key,
	out Object?? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetValue ( 
	key As Object,
	<OutAttribute> ByRef value As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetValue : 
        key : Object * 
        value : Object byref -> bool 
override TryGetValue : 
        key : Object * 
        value : Object byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/ResourceDictionary.cs#L228" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.trygetvalue" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue).TryGetValue(TKey, TValue)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_ResourceDictionary">ResourceDictionary Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

