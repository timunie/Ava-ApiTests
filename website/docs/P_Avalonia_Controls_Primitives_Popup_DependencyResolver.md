# DependencyResolver Property


Gets or sets a dependency resolver for the <a href="T_Avalonia_Controls_Primitives_PopupRoot">PopupRoot</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IAvaloniaDependencyResolver? DependencyResolver { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property DependencyResolver As IAvaloniaDependencyResolver
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member DependencyResolver : IAvaloniaDependencyResolver with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/Popup.cs#L202" title="View the source code">View Source</a>



#### Property Value
IAvaloniaDependencyResolver

## Remarks
This property allows a client to customize the behaviour of the popup by injecting a specialized dependency resolver into the <a href="T_Avalonia_Controls_Primitives_PopupRoot">PopupRoot</a>'s constructor.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_Popup">Popup Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

