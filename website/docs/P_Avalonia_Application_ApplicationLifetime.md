# ApplicationLifetime Property


Application lifetime, use it for things like setting the main window and exiting the app from code Currently supported lifetimes are: - <a href="T_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime">IClassicDesktopStyleApplicationLifetime</a> - <a href="T_Avalonia_Controls_ApplicationLifetimes_ISingleViewApplicationLifetime">ISingleViewApplicationLifetime</a> - <a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime</a> - <a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableApplicationLifetime">IActivatableApplicationLifetime</a>



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IApplicationLifetime? ApplicationLifetime { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property ApplicationLifetime As IApplicationLifetime
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ApplicationLifetime : IApplicationLifetime with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Application.cs#L186" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_ApplicationLifetimes_IApplicationLifetime">IApplicationLifetime</a>

## See Also


#### Reference
<a href="T_Avalonia_Application">Application Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

