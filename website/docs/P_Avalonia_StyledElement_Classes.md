# Classes Property


Gets or sets the styled element's classes.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Classes Classes \{ get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property Classes As Classes
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Classes : Classes with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledElement.cs#L190" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_Classes">Classes</a>
Classes can be used to apply user-defined styling to styled elements, or to allow styled elements that share a common purpose to be easily selected.

Even though this property can be set, the setter is only intended for use in object initializers. Assigning to this property does not change the underlying collection, it simply clears the existing collection and adds the contents of the assigned collection.


## See Also


#### Reference
<a href="T_Avalonia_StyledElement">StyledElement Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
