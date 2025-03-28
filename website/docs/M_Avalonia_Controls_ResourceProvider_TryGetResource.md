# TryGetResource Method


Tries to find a resource within the object.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract bool TryGetResource(
	Object key,
	ThemeVariant? theme,
	out Object?? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustOverride Function TryGetResource ( 
	key As Object,
	theme As ThemeVariant,
	<OutAttribute> ByRef value As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetResource : 
        key : Object * 
        theme : ThemeVariant * 
        value : Object byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/ResourceProvider.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The resource key.</dd><dt>  <a href="T_Avalonia_Styling_ThemeVariant">ThemeVariant</a></dt><dd>Theme used to select theme dictionary.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>When this method returns, contains the value associated with the specified key, if the key is found; otherwise, null.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the resource if found, otherwise false.

#### Implements
<a href="M_Avalonia_Controls_IResourceNode_TryGetResource">IResourceNode.TryGetResource(Object, ThemeVariant, Object)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_ResourceProvider">ResourceProvider Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

