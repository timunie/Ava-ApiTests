import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Application Class


Encapsulates a Avalonia application.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Application : AvaloniaObject, 
	IDataContextProvider, IGlobalDataTemplates, IDataTemplateHost, IGlobalStyles, IStyleHost, 
	IThemeVariantHost, IResourceHost, IResourceNode, IApplicationPlatformEvents, IOptionalFeatureProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Application
	Inherits AvaloniaObject
	Implements IDataContextProvider, IGlobalDataTemplates, IDataTemplateHost, IGlobalStyles, 
	IStyleHost, IThemeVariantHost, IResourceHost, IResourceNode, IApplicationPlatformEvents, 
	IOptionalFeatureProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Application = 
    class
        inherit AvaloniaObject
        interface IDataContextProvider
        interface IGlobalDataTemplates
        interface IDataTemplateHost
        interface IGlobalStyles
        interface IStyleHost
        interface IThemeVariantHost
        interface IResourceHost
        interface IResourceNode
        interface IApplicationPlatformEvents
        interface IOptionalFeatureProvider
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaObject  →  Application</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_IGlobalDataTemplates">IGlobalDataTemplates</a>, IResourceHost, IResourceNode, <a href="T_Avalonia_Controls_Templates_IDataTemplateHost">IDataTemplateHost</a>, IDataContextProvider, <a href="T_Avalonia_Platform_IApplicationPlatformEvents">IApplicationPlatformEvents</a>, IOptionalFeatureProvider, IGlobalStyles, IStyleHost, IThemeVariantHost</td></tr>
</table>

The Application class encapsulates Avalonia application-specific functionality, including: - A global set of <a href="P_Avalonia_Application_DataTemplates">DataTemplates</a>. - A global set of <a href="P_Avalonia_Application_Styles">Styles</a>. - A FocusManager. - An InputManager. - Registers services needed by the rest of Avalonia in the <a href="M_Avalonia_Application_RegisterServices">RegisterServices()</a> method. - Tracks the lifetime of the application.

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Application__ctor">Application</a></td>
<td>Creates an instance of the Application class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Application_ActualThemeVariant">ActualThemeVariant</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_ApplicationLifetime">ApplicationLifetime</a></td>
<td>Application lifetime, use it for things like setting the main window and exiting the app from code Currently supported lifetimes are: - <a href="T_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime">IClassicDesktopStyleApplicationLifetime</a> - <a href="T_Avalonia_Controls_ApplicationLifetimes_ISingleViewApplicationLifetime">ISingleViewApplicationLifetime</a> - <a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime</a> - <a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableApplicationLifetime">IActivatableApplicationLifetime</a></td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_Current">Current</a></td>
<td>Gets the current instance of the Application class.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_DataContext">DataContext</a></td>
<td>Gets or sets the Applications's data context.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_DataTemplates">DataTemplates</a></td>
<td>Gets or sets the application's global data templates.</td>
</tr>
<tr>
<td>InheritanceParent</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Item</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Item</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_Name">Name</a></td>
<td>Application name to be used for various platform-specific purposes</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_PlatformSettings">PlatformSettings</a></td>
<td>Represents a contract for accessing global platform-specific settings.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_RequestedThemeVariant">RequestedThemeVariant</a></td>
<td>Gets or sets the UI theme variant that is used by the control (and its child elements) for resource determination. The UI theme you specify with ThemeVariant can override the app-level ThemeVariant.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_Resources">Resources</a></td>
<td>Gets the application's global resource dictionary.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_Styles">Styles</a></td>
<td>Gets the application's global styles.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td>Bind(AvaloniaProperty, IBinding)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind(AvaloniaProperty, IObservable(Object), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(BindingValue(UMP)))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(Object))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(UMP), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(BindingValue(UMP)), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(Object), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>CheckAccess</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(AvaloniaProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(DirectPropertyBase(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>CoerceValue</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Equals</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>GetBaseValue``1</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetHashCode</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>GetValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetValue``1(DirectPropertyBase(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Application_Initialize">Initialize</a></td>
<td>Initializes the application by loading XAML etc.</td>
</tr>
<tr>
<td>IsAnimating</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>IsSet</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Application_OnFrameworkInitializationCompleted">OnFrameworkInitializationCompleted</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Application_OnPropertyChanged">OnPropertyChanged</a></td>
<td><br />(Overrides AvaloniaObject.OnPropertyChanged(AvaloniaPropertyChangedEventArgs))</td>
</tr>
<tr>
<td>OnPropertyChangedCore</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>RaisePropertyChanged``1</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Application_RegisterServices">RegisterServices</a></td>
<td>Register's the services needed by Avalonia.</td>
</tr>
<tr>
<td>SetAndRaise``1</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetCurrentValue(AvaloniaProperty, Object)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetCurrentValue``1(StyledProperty(UMP), UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue(AvaloniaProperty, Object, BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue``1(DirectPropertyBase(UMP), UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue``1(StyledProperty(UMP), UMP, BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Application_TryGetFeature">TryGetFeature</a></td>
<td>Queries for an optional feature.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Application_TryGetResource">TryGetResource</a></td>
<td> </td>
</tr>
<tr>
<td>UpdateDataValidation</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>VerifyAccess</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Application_ActualThemeVariantChanged">ActualThemeVariantChanged</a></td>
<td> </td>
</tr>
<tr>
<td>PropertyChanged</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Application_ResourcesChanged">ResourcesChanged</a></td>
<td> </td>
</tr>
<tr>
<td><a href="E_Avalonia_Application_UrlsOpened">UrlsOpened</a></td>
<td><strong>Obsolete.</strong></td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Application_ActualThemeVariantProperty">ActualThemeVariantProperty</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Application_DataContextProperty">DataContextProperty</a></td>
<td>Defines the <a href="P_Avalonia_Application_DataContext">DataContext</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Application_NameProperty">NameProperty</a></td>
<td>Defines Name property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Application_RequestedThemeVariantProperty">RequestedThemeVariantProperty</a></td>
<td> </td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_DesktopApplicationExtensions_Run_2">Run</a></td>
<td>On desktop-style platforms runs the application's main loop with custom CancellationToken without setting a lifetime.<br />(Defined by <a href="T_Avalonia_Controls_DesktopApplicationExtensions">DesktopApplicationExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DesktopApplicationExtensions_Run_1">Run</a></td>
<td>On desktop-style platforms runs the application's main loop until closable is closed<br />(Defined by <a href="T_Avalonia_Controls_DesktopApplicationExtensions">DesktopApplicationExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DesktopApplicationExtensions_Run">Run</a></td>
<td>On desktop-style platforms runs the application's main loop until main window is closed<br />(Defined by <a href="T_Avalonia_Controls_DesktopApplicationExtensions">DesktopApplicationExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DesktopApplicationExtensions_RunWithMainWindow__1">RunWithMainWindow(TWindow)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_DesktopApplicationExtensions">DesktopApplicationExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
