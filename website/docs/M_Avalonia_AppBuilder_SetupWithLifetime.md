# SetupWithLifetime Method


Sets up the platform-specific services for the application and initialized it with a particular lifetime, but does not run it.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AppBuilder SetupWithLifetime(
	IApplicationLifetime lifetime
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function SetupWithLifetime ( 
	lifetime As IApplicationLifetime
) As AppBuilder
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SetupWithLifetime : 
        lifetime : IApplicationLifetime -> AppBuilder 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AppBuilder.cs#L204" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_ApplicationLifetimes_IApplicationLifetime">IApplicationLifetime</a></dt><dd /></dl>

#### Return Value
<a href="T_Avalonia_AppBuilder">AppBuilder</a>  


## See Also


#### Reference
<a href="T_Avalonia_AppBuilder">AppBuilder Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
