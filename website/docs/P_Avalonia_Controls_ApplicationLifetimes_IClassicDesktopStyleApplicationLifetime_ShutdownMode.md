# ShutdownMode Property


Gets or sets the ShutdownMode. This property indicates whether the application is shutdown explicitly or implicitly. If ShutdownMode is set to OnExplicitShutdown the application is only closes if Shutdown is called. The default is OnLastWindowClose



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ShutdownMode ShutdownMode { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Property ShutdownMode As ShutdownMode
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ShutdownMode : ShutdownMode with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ApplicationLifetimes/IClassicDesktopStyleApplicationLifetime.cs" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_ShutdownMode">ShutdownMode</a>  
The shutdown mode.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime">IClassicDesktopStyleApplicationLifetime Interface</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  

