# SetDefaultAssembly Method


Sets the default assembly from which to load assets for which no assembly is specified.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void SetDefaultAssembly(
	Assembly assembly
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub SetDefaultAssembly ( 
	assembly As Assembly
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SetDefaultAssembly : 
        assembly : Assembly -> unit 
override SetDefaultAssembly : 
        assembly : Assembly -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/StandardAssetLoader.cs#L42" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.reflection.assembly" target="_blank" rel="noopener noreferrer">Assembly</a></dt><dd>The default assembly.</dd></dl>

#### Implements
<a href="M_Avalonia_Platform_IAssetLoader_SetDefaultAssembly">IAssetLoader.SetDefaultAssembly(Assembly)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Platform_StandardAssetLoader">StandardAssetLoader Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

