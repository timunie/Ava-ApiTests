# TryEnterBackground Method


Tells the application that it should attempt to enter its background state. For example on OSX this would be [NSApp hide]



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool TryEnterBackground()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function TryEnterBackground As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryEnterBackground : unit -> bool 
```
</TabItem>
</Tabs>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if it was possible and the platform supports this. false otherwise

## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime Interface</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  

