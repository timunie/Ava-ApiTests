# SetDefaultAssembly Method


We need a way to override the default assembly selected by the host platform because right now it is selecting the wrong one for PCL based Apps. The AssetLoader needs a refactor cause right now it lives in 3+ platforms which can all be loaded on Windows.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void SetDefaultAssembly(
	Assembly assembly
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub SetDefaultAssembly ( 
	assembly As Assembly
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SetDefaultAssembly : 
        assembly : Assembly -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IAssetLoader.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.reflection.assembly" target="_blank" rel="noopener noreferrer">Assembly</a></dt><dd /></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IAssetLoader">IAssetLoader Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

