# GetAssets Method


Gets all assets of a folder and subfolders that match specified uri.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IEnumerable<Uri> GetAssets(
	Uri uri,
	Uri? baseUri
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetAssets ( 
	uri As Uri,
	baseUri As Uri
) As IEnumerable(Of Uri)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetAssets : 
        uri : Uri * 
        baseUri : Uri -> IEnumerable<Uri> 
override GetAssets : 
        uri : Uri * 
        baseUri : Uri -> IEnumerable<Uri> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/StandardAssetLoader.cs#L117" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a></dt><dd>The URI.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a></dt><dd>Base URI that is used if <em>uri</em> is relative.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a>)  
All matching assets as a tuple of the absolute path to the asset and the assembly containing the asset

#### Implements
<a href="M_Avalonia_Platform_IAssetLoader_GetAssets">IAssetLoader.GetAssets(Uri, Uri)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Platform_StandardAssetLoader">StandardAssetLoader Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
