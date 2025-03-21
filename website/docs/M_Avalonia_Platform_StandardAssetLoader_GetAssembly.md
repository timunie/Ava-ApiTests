# GetAssembly Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Assembly? GetAssembly(
	Uri uri,
	Uri? baseUri
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetAssembly ( 
	uri As Uri,
	baseUri As Uri
) As Assembly
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetAssembly : 
        uri : Uri * 
        baseUri : Uri -> Assembly 
override GetAssembly : 
        uri : Uri * 
        baseUri : Uri -> Assembly 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/StandardAssetLoader.cs#L97" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.reflection.assembly" target="_blank" rel="noopener noreferrer">Assembly</a>

#### Implements
<a href="M_Avalonia_Platform_IAssetLoader_GetAssembly">IAssetLoader.GetAssembly(Uri, Uri)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Platform_StandardAssetLoader">StandardAssetLoader Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

