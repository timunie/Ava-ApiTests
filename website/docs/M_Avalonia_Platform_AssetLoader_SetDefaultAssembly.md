# SetDefaultAssembly Method


We need a way to override the default assembly selected by the host platform because right now it is selecting the wrong one for PCL based Apps. The AssetLoader needs a refactor cause right now it lives in 3+ platforms which can all be loaded on Windows.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void SetDefaultAssembly(
	Assembly assembly
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub SetDefaultAssembly ( 
	assembly As Assembly
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member SetDefaultAssembly : 
        assembly : Assembly -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/AssetLoader.cs#L17" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.reflection.assembly" target="_blank" rel="noopener noreferrer">Assembly</a></dt><dd /></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_AssetLoader">AssetLoader Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

